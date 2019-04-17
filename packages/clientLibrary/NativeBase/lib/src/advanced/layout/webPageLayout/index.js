import * as React from 'react';
import { Alert, BackHandler, LayoutAnimation, Linking, PanResponder, StyleSheet, WebView } from 'react-native';
import { Footer, Spinner, Icon, Container, Header, Title, Content, Button, Left, Right, Body } from '@appBasic/index'; // Advanced
import { isFacebookCallBack, isShareCallBack, isTrue, isTwitterCallBack } from './utils';
export class WebPageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.handleURL = (url) => {
            this.setState({ url, activeUrl: url });
        };
        this.renderLoading = () => {
            return React.createElement(Spinner, null);
        };
        this.handlePanResponderRelease = () => {
            this.timeout = setTimeout(() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                this.setState({ isScrolling: false });
            }, 1000);
        };
        this.handlePanResponderGrant = (evt, gestureState) => {
            clearTimeout(this.timeout);
            this.setState({
                firstMoveY: gestureState.y0
            });
        };
        this.handlePanResponderMove = (evt, gestureState) => {
            const distance = Math.abs(gestureState.moveY - this.state.firstMoveY);
            if (distance > 200) {
                this.setState({ isScrolling: true });
            }
        };
        this.handleHardwareBack = () => {
            const delta = new Date().getTime() - this.state.lastPress;
            this.setState({
                lastPress: new Date().getTime()
            });
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
                ]);
            }
            else {
                this.handleBack();
            }
            return true;
        };
        this.setupAnimations = () => {
            this.timeout = setTimeout(() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                this.setState({ showInput: true });
            }, 1500);
        };
        this.handleNavigationStateChange = (navState) => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            const activeUrl = navState.url;
            console.log('activeUrl : ', activeUrl);
            this.setState({
                backButtonEnabled: navState.canGoBack,
                forwardButtonEnabled: navState.canGoForward,
                activeUrl: navState.url,
                title: navState.title,
                loading: navState.loading
            });
            this.onTwitterCallbackListener(activeUrl);
        };
        this.handleLoad = (url) => this.setState({ url });
        this.handleReload = () => this.webview.reload();
        this.handleBack = () => this.webview.goBack();
        this.handleForward = () => {
            this.webview.goForward();
        };
        this.handleHome = () => this.setState({
            url: this.props.initialURL,
            activeUrl: this.props.initialURL
        });
        const { globalProps } = props;
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
        };
    }
    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleHardwareBack);
        this.setupAnimations();
        Linking.addEventListener('url', this.handleURL);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleHardwareBack);
        Linking.removeEventListener('url', this.handleURL);
        clearTimeout(this.timeout);
    }
    renderFooter() {
        const { globalProps } = this.props;
        return (React.createElement(Footer, null,
            React.createElement(Body, null, !!globalProps.renderBottonPanel && globalProps.renderBottonPanel())));
    }
    renderHeader() {
        const { activeUrl, loading, showInput, title, isScrolling } = this.state;
        const { globalProps } = this.props;
        return (React.createElement(Header, null,
            React.createElement(Left, null,
                React.createElement(Button, { transparent: true, onPress: () => globalProps.navigation.goBack() },
                    React.createElement(Icon, { name: "arrow-back" }))),
            React.createElement(Body, null,
                React.createElement(Title, null, globalProps.title)),
            React.createElement(Right, null)));
    }
    render() {
        const { url, backButtonEnabled, forwardButtonEnabled, isScrolling } = this.state;
        const { globalProps } = this.props;
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: isTrue,
            onStartShouldSetPanResponderCapture: isTrue,
            onMoveShouldSetPanResponder: isTrue,
            onMoveShouldSetPanResponderCapture: isTrue,
            onPanResponderGrant: this.handlePanResponderGrant,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderRelease: this.handlePanResponderRelease
        });
        const { panHandlers } = panResponder;
        return (React.createElement(Container, null,
            this.renderHeader(),
            React.createElement(Content, null,
                React.createElement(WebView, { ref: (ref) => {
                        this.webview = ref;
                    }, style: styles.webview, onNavigationStateChange: this.handleNavigationStateChange, source: { uri: url }, startInLoadingState: true, renderLoading: this.renderLoading, automaticallyAdjustContentInsets: false, scalesPageToFit: true })),
            globalProps.showNavigationBottonBar && this.renderFooter()));
    }
    onTwitterCallbackListener(activeUrl) {
        const { globalProps } = this.props;
        if (isShareCallBack(activeUrl)) {
            // Step2: dismiss the popup pages.
            globalProps.navigation.dismiss();
        }
        if (isTwitterCallBack(activeUrl)) {
            const params = globalProps.navigation.state.params;
            // Step1: reduce the action.
            globalProps.callBackTwitterAction({
                browserToken: params.browserToken,
                url: activeUrl
            });
            // Step2: dismiss the popup pages.
            globalProps.navigation.dismiss();
        }
        else if (isFacebookCallBack(activeUrl)) {
            const params = globalProps.navigation.state.params;
            // Step1: reduce the action.
            globalProps.callBackFacebookAction({
                browserToken: params.browserToken,
                url: activeUrl
            });
            // Step2: dismiss the popup pages.
            globalProps.navigation.dismiss();
        }
    }
}
const styles = StyleSheet.create({
    webview: {
        backgroundColor: '#F7F8F8'
    }
});
//# sourceMappingURL=index.js.map