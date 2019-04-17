import * as React from 'react'
import {
  Alert,
  BackHandler,
  LayoutAnimation,
  Linking,
  PanResponder,
  StyleSheet,
  View,
  WebView
} from 'react-native'
import {
  Footer,
  Spinner,
  Icon,
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body
} from '@appBasic/index' // Advanced
import { INavWebbrowserParams, IGummybearWebBrowserGlobalProps } from '@app/tools' // typings

import { isFacebookCallBack, isShareCallBack, isTrue, isTwitterCallBack } from './utils'

interface IWebPageLayoutProps {
  initialURL: string
  globalProps: IGummybearWebBrowserGlobalProps
}

interface IWebPageLayoutState {
  url: string
  activeUrl: string
  lastPress: number
  title: string
  loading: boolean
  backButtonEnabled: boolean
  forwardButtonEnabled: boolean
  showInput: boolean
  firstMoveY: number
  isScrolling: boolean
}

export class WebPageLayout extends React.Component<IWebPageLayoutProps, IWebPageLayoutState> {
  private webview: any
  private timeout: any
  constructor(props: IWebPageLayoutProps) {
    super(props)

    const { globalProps } = props

    this.state = {
      lastPress: 0,
      title: globalProps.title,
      loading: true,
      url: props.initialURL,
      activeUrl: props.initialURL,
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      showInput: false,
      firstMoveY: 0,
      isScrolling: false
    }
  }
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleHardwareBack)
    this.setupAnimations()
    Linking.addEventListener('url', this.handleURL)
  }

  handleURL = (url) => {
    this.setState({ url, activeUrl: url })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleHardwareBack)
    Linking.removeEventListener('url', this.handleURL)
    clearTimeout(this.timeout)
  }

  renderFooter() {
    const { globalProps } = this.props

    return (
      <Footer>
        <Body>{!!globalProps.renderBottonPanel && globalProps.renderBottonPanel()}</Body>
      </Footer>
    )
  }

  renderHeader() {
    const { activeUrl, loading, showInput, title, isScrolling } = this.state

    const { globalProps } = this.props

    return (
      <Header>
        <Left>
          <Button transparent onPress={() => globalProps.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{globalProps.title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }

  renderLoading = (): any => {
    return <Spinner />
  }

  render() {
    const { url, backButtonEnabled, forwardButtonEnabled, isScrolling } = this.state

    const { globalProps } = this.props

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: isTrue,
      onStartShouldSetPanResponderCapture: isTrue,
      onMoveShouldSetPanResponder: isTrue,
      onMoveShouldSetPanResponderCapture: isTrue,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease
    })

    const { panHandlers } = panResponder

    return (
      <Container>
        {this.renderHeader()}

        <Content>
          <WebView
            ref={(ref) => {
              this.webview = ref
            }}
            style={styles.webview}
            onNavigationStateChange={this.handleNavigationStateChange}
            source={{ uri: url }}
            startInLoadingState
            renderLoading={this.renderLoading}
            automaticallyAdjustContentInsets={false}
            scalesPageToFit
          />
        </Content>

        {globalProps.showNavigationBottonBar && this.renderFooter()}
      </Container>
    )
  }
  handlePanResponderRelease = () => {
    this.timeout = setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
      this.setState({ isScrolling: false })
    }, 1000)
  }
  handlePanResponderGrant = (evt, gestureState) => {
    clearTimeout(this.timeout)
    this.setState({
      firstMoveY: gestureState.y0
    })
  }
  handlePanResponderMove = (evt, gestureState) => {
    const distance = Math.abs(gestureState.moveY - this.state.firstMoveY)
    if (distance > 200) {
      this.setState({ isScrolling: true })
    }
  }
  handleHardwareBack = () => {
    const delta = new Date().getTime() - this.state.lastPress
    this.setState({
      lastPress: new Date().getTime()
    })
    // Detect if single tab or double
    // Adapted from: https://gist.github.com/mrzmyr/9ac94ca4622c1602a2a3
    if (delta < 200) {
      Alert.alert('Hold up!', 'Would you like to exit?', [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: BackHandler.exitApp
        }
      ])
    } else {
      this.handleBack()
    }
    return true
  }
  setupAnimations = () => {
    this.timeout = setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      this.setState({ showInput: true })
    }, 1500)
  }
  handleNavigationStateChange = (navState) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    const activeUrl = navState.url
    console.log('activeUrl : ', activeUrl)
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      activeUrl: navState.url,
      title: navState.title,
      loading: navState.loading
    })

    this.onTwitterCallbackListener(activeUrl)
  }

  onTwitterCallbackListener(activeUrl) {
    const { globalProps } = this.props
    if (isShareCallBack(activeUrl)) {
      // Step2: dismiss the popup pages.
      globalProps.navigation.dismiss()
    }
    if (isTwitterCallBack(activeUrl)) {
      const params: INavWebbrowserParams = globalProps.navigation.state.params
      // Step1: reduce the action.
      globalProps.callBackTwitterAction({
        browserToken: params.browserToken,
        url: activeUrl
      })
      // Step2: dismiss the popup pages.
      globalProps.navigation.dismiss()
    } else if (isFacebookCallBack(activeUrl)) {
      const params: INavWebbrowserParams = globalProps.navigation.state.params
      // Step1: reduce the action.
      globalProps.callBackFacebookAction({
        browserToken: params.browserToken,
        url: activeUrl
      })
      // Step2: dismiss the popup pages.
      globalProps.navigation.dismiss()
    }
  }

  handleLoad = (url) => this.setState({ url })
  handleReload = () => this.webview.reload()
  handleBack = () => this.webview.goBack()
  handleForward = () => {
    this.webview.goForward()
  }
  handleHome = () =>
    this.setState({
      url: this.props.initialURL,
      activeUrl: this.props.initialURL
    })
}
const styles = StyleSheet.create({
  webview: {
    backgroundColor: '#F7F8F8'
  }
})
