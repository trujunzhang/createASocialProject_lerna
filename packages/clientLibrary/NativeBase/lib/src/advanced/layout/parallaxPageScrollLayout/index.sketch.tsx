import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ScrollView, Dimensions, View } from 'react-primitives'
import { Container } from '@appBasic/index' // Advanced
import { ListSwipeHelper } from '@app/tools'
import { platformVariables as variable } from '@appVariables/theme/variables/platform' // variables // [variable]
import { IThemeVariables } from '@app/tools' // typings

import { styles } from './styles'

import { PageHeader } from '../pageHeader'

const window = Dimensions.get('window')

const pivotPoint = (a, b) => a - b

const renderEmpty = () => <View />

const noRender = () => <View style={{ display: 'none' }} />

// Override `toJSON` of interpolated value because of
// an error when serializing style on view inside inspector.
// See: https://github.com/jaysoo/react-native-parallax-scroll-view/issues/23
const interpolate = (value, opts) => {
  const x = value.interpolate(opts)
  x.toJSON = () => x.__getValue()
  return x
}

// Properties accepted by `ParallaxPageScrollLayout`.

import { IPageToolbarParams } from '@app/tools' // typings
// import variable from '../theme/variables/platform'

export interface IParallaxPageScrollLayoutProps {
  fixedToolbarParams: IPageToolbarParams
  stickyToolbarParams: IPageToolbarParams
  listSwipeHelper: ListSwipeHelper
  // Custom
  renderStickyHeader?: any
  // Properties
  // listSwipeHelper: any
  hasStickyHeaderTransparent?: boolean
  renderParallaxHeader: any
  backgroundColor: string
  backgroundScrollSpeed?: number
  fadeOutForeground?: boolean
  fadeOutBackground?: boolean
  contentBackgroundColor: string
  onChangeHeaderVisibility?: any
  parallaxHeaderHeight: number
  renderBackground: any
  renderContentBackground: any
  renderForeground: any
  renderScrollComponent?: any
  stickyHeaderHeight: number
  contentContainerStyle?: any
  outputScaleValue?: number
  style?: any
  onScroll?: any
  scrollEvent?: any
}

interface IParallaxPageScrollLayoutStats {
  scrollEnabled: boolean
  viewWidth: number
  viewHeight: number
}

export class ParallaxPageScrollLayout extends React.Component<
  IParallaxPageScrollLayoutProps,
  IParallaxPageScrollLayoutStats
> {
  static contextTypes = {
    theme: PropTypes.object
  }

  private containerHeight: any
  private scrollY: any
  private _footerComponent: any
  private _footerHeight: number
  private _root: any = null

  static defaultProps = {
    backgroundScrollSpeed: 5,
    backgroundColor: '#000',
    contentBackgroundColor: '#fff',
    fadeOutForeground: true,
    onChangeHeaderVisibility: () => {},
    renderScrollComponent: (props) => <ScrollView {...props} />,
    renderBackground: renderEmpty,
    renderContentBackground: noRender,
    renderParallaxHeader: renderEmpty, // Deprecated (will be removed in 0.18.0)
    renderForeground: null,
    stickyHeaderHeight: 0,
    contentContainerStyle: null,
    outputScaleValue: 5
  }

  constructor(props: IParallaxPageScrollLayoutProps) {
    super(props)

    const { listSwipeHelper } = props
    listSwipeHelper.addOnScrollEnableChangedListener('parallaxScroll', (enable) => {
      this.setState({
        scrollEnabled: enable
      })
    })

    this.state = {
      scrollEnabled: true,
      viewHeight: window.height,
      viewWidth: window.width
    }
    this._footerComponent = {
      setNativeProps() {}
    } // Initial stub
    this._footerHeight = 0
  }

  // <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />

  render() {
    return <Container>{this.renderContent()}</Container>
  }

  renderContent() {
    const {
      backgroundColor,
      backgroundScrollSpeed,
      children,
      contentBackgroundColor,
      fadeOutForeground,
      fadeOutBackground,
      parallaxHeaderHeight,
      renderBackground,
      renderContentBackground,
      renderForeground,
      renderParallaxHeader,
      renderScrollComponent,
      stickyHeaderHeight,
      style,
      contentContainerStyle,
      outputScaleValue,
      ...scrollViewProps
    } = this.props

    const background = this._renderBackground({
      fadeOutBackground,
      backgroundScrollSpeed,
      backgroundColor,
      parallaxHeaderHeight,
      stickyHeaderHeight,
      renderBackground,
      outputScaleValue
    })
    const foreground = this._renderForeground({
      fadeOutForeground,
      parallaxHeaderHeight,
      stickyHeaderHeight,
      renderForeground: renderForeground || renderParallaxHeader
    })
    const bodyComponent = this._wrapChildren(children, {
      contentBackgroundColor,
      stickyHeaderHeight,
      renderContentBackground,
      contentContainerStyle
    })
    const footerSpacer = this._renderFooterSpacer({ contentBackgroundColor })
    const maybeStickyHeader = this._maybeRenderStickyHeader({
      parallaxHeaderHeight,
      stickyHeaderHeight
    })
    const scrollElement = renderScrollComponent(scrollViewProps)
    const scrollProperties = {
      ref: (ref) => {
        this._root = ref
      },
      style: [styles.scrollView, scrollElement.props.style],
      scrollEventThrottle: 1,
      scrollEnabled: this.state.scrollEnabled
      // Using Native Driver greatly optimizes performance
    }
    const scrollChildren = [foreground, bodyComponent, footerSpacer]
    return (
      <View style={[style, styles.container]} onLayout={(e) => this._maybeUpdateViewDimensions(e)}>
        {background}
        {React.cloneElement(scrollElement, scrollProperties, scrollChildren)}
        {maybeStickyHeader}
      </View>
    )
  }

  /*
   * Expose `ScrollView` API so this component is composable with any component that expects a `ScrollView`.
   */
  getScrollResponder = () => {
    return this._root._component.getScrollResponder()
  }

  getScrollableNode() {
    return this.getScrollResponder().getScrollableNode()
  }

  getInnerViewNode() {
    return this.getScrollResponder().getInnerViewNode()
  }

  scrollTo(...args) {
    this.getScrollResponder().scrollTo(...args)
  }

  setNativeProps(props) {
    this._root.setNativeProps(props)
  }

  /*
   * Private helpers
   */

  _onScroll(e) {
    const { listSwipeHelper } = this.props
    listSwipeHelper.onRowCloseOrPressOrScroll(true)

    const {
      parallaxHeaderHeight,
      stickyHeaderHeight,
      onChangeHeaderVisibility,
      onScroll: prevOnScroll = () => {}
    } = this.props
    this.props.scrollEvent && this.props.scrollEvent(e)
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight)

    // This optimization wont run, since we update the animation value directly in onScroll event
    // this._maybeUpdateScrollPosition(e)

    if (e.nativeEvent.contentOffset.y >= p) {
      onChangeHeaderVisibility(false)
    } else {
      onChangeHeaderVisibility(true)
    }

    prevOnScroll(e)
  }

  // This optimizes the state update of current scrollY since we don't need to
  // perform any updates when user has scrolled past the pivot point.
  _maybeUpdateScrollPosition(e) {
    const { parallaxHeaderHeight, stickyHeaderHeight } = this.props
    const { scrollY } = this
    const {
      nativeEvent: {
        contentOffset: { y: offsetY }
      }
    } = e
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight)
    if (offsetY <= p || scrollY._value <= p) {
      scrollY.setValue(offsetY)
    }
  }

  _maybeUpdateViewDimensions(e) {
    const {
      nativeEvent: {
        layout: { width, height }
      }
    } = e

    if (width !== this.state.viewWidth || height !== this.state.viewHeight) {
      this.setState({
        viewWidth: width,
        viewHeight: height
      })
    }
  }

  _renderBackground({
    fadeOutBackground,
    backgroundScrollSpeed,
    backgroundColor,
    parallaxHeaderHeight,
    stickyHeaderHeight,
    renderBackground,
    outputScaleValue
  }) {
    const { viewWidth, viewHeight } = this.state
    const { scrollY } = this
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight)
    return (
      <View
        style={[
          styles.backgroundImage,
          {
            backgroundColor: backgroundColor,
            height: parallaxHeaderHeight,
            width: viewWidth,
            opacity: fadeOutBackground
              ? interpolate(scrollY, {
                  inputRange: [0, p * (1 / 2), p * (3 / 4), p],
                  outputRange: [1, 0.3, 0.1, 0],
                  extrapolate: 'clamp'
                })
              : 1,
            transform: [
              {
                translateY: interpolate(scrollY, {
                  inputRange: [0, p],
                  outputRange: [0, -(p / backgroundScrollSpeed)],
                  extrapolateRight: 'extend',
                  extrapolateLeft: 'clamp'
                })
              },
              {
                scale: interpolate(scrollY, {
                  inputRange: [-viewHeight, 0],
                  outputRange: [outputScaleValue * 1.5, 1],
                  extrapolate: 'clamp'
                })
              }
            ]
          }
        ]}>
        <View>{renderBackground()}</View>
      </View>
    )
  }

  _renderForeground({
    fadeOutForeground,
    parallaxHeaderHeight,
    stickyHeaderHeight,
    renderForeground
  }) {
    const { scrollY } = this
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight)
    return (
      <View style={styles.parallaxHeaderContainer}>
        <View
          style={[
            styles.parallaxHeader,
            {
              height: parallaxHeaderHeight,
              opacity: fadeOutForeground
                ? interpolate(scrollY, {
                    inputRange: [0, p * (1 / 2), p * (3 / 4), p],
                    outputRange: [1, 0.3, 0.1, 0],
                    extrapolate: 'clamp'
                  })
                : 1
            }
          ]}>
          <View style={{ height: parallaxHeaderHeight }}>{renderForeground()}</View>
        </View>
      </View>
    )
  }

  _wrapChildren(
    children,
    { contentBackgroundColor, stickyHeaderHeight, contentContainerStyle, renderContentBackground }
  ) {
    const { viewHeight } = this.state
    const containerStyles = [{ backgroundColor: contentBackgroundColor }]

    if (contentContainerStyle) containerStyles.push(contentContainerStyle)

    this.containerHeight = this.state.viewHeight

    React.Children.forEach(children, (item) => {
      if (item && Object.keys(item).length != 0) {
        this.containerHeight = 0
      }
    })

    return (
      <View
        style={[containerStyles, { minHeight: this.containerHeight }]}
        onLayout={(e) => {
          // Adjust the bottom height so we can scroll the parallax header all the way up.
          const {
            nativeEvent: {
              layout: { height }
            }
          } = e
          const footerHeight = Math.max(0, viewHeight - height - stickyHeaderHeight)
          if (this._footerHeight !== footerHeight) {
            this._footerComponent.setNativeProps({
              style: { height: footerHeight }
            })
            this._footerHeight = footerHeight
          }
        }}>
        {renderContentBackground()}
        {children}
      </View>
    )
  }

  _renderFooterSpacer({ contentBackgroundColor }) {
    return (
      <View
        ref={(ref) => {
          if (ref) {
            this._footerComponent = ref
          }
        }}
        style={{ backgroundColor: contentBackgroundColor }}
      />
    )
  }

  renderParallaxStickyHeaderContent() {
    const { hasStickyHeaderTransparent } = this.props
    const variables: IThemeVariables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable

    const { parallaxStickHeaderContainerStyle } = variables

    if (parallaxStickHeaderContainerStyle === undefined) {
      throw new Error('Should set theme called parallaxStickHeaderContainerStyle!')
    }

    return (
      <PageHeader
        toolbarParams={this.props.stickyToolbarParams}
        parallax={true}
        noStatusBar={true}
        transparent={hasStickyHeaderTransparent === undefined ? false : hasStickyHeaderTransparent}
      />
    )
  }

  renderParallaxStickyHeader(stickyHeaderHeight, p, scrollY) {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          height: stickyHeaderHeight,
          opacity: interpolate(scrollY, {
            inputRange: [0, p],
            outputRange: [0, 1],
            extrapolate: 'clamp'
          })
        }}>
        <View
          style={{
            transform: [
              {
                translateY: interpolate(scrollY, {
                  inputRange: [0, p],
                  outputRange: [stickyHeaderHeight, 0],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}>
          {this.renderParallaxStickyHeaderContent()}
        </View>
      </View>
    )
  }

  renderParallaxFixedHeader() {
    const variables: IThemeVariables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : null

    const { parallaxFixedHeaderContainerStyle } = variables

    if (parallaxFixedHeaderContainerStyle === undefined) {
      throw new Error('Should set theme called parallaxFixedHeaderContainerStyle!')
    }

    // console.log('page: ', variables.parallaxFixedHeaderContainerStyle)

    return (
      <View style={[parallaxFixedHeaderContainerStyle]}>
        <PageHeader
          toolbarParams={this.props.fixedToolbarParams}
          parallax={true}
          noStatusBar={true}
          transparent={true}
        />
      </View>
    )
  }

  _maybeRenderStickyHeader({ parallaxHeaderHeight, stickyHeaderHeight }) {
    const { viewWidth } = this.state
    const { scrollY } = this
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight)
    return (
      <View
        style={[
          styles.stickyHeader,
          {
            width: viewWidth,
            ...(stickyHeaderHeight ? { height: stickyHeaderHeight } : null)
          }
        ]}>
        {this.renderParallaxStickyHeader(stickyHeaderHeight, p, scrollY)}
        {this.renderParallaxFixedHeader()}
      </View>
    )
  }
}
