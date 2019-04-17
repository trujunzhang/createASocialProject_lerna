import * as React from 'react';
import { IGummybearWebBrowserGlobalProps } from '@app/tools';
interface IWebPageLayoutProps {
    initialURL: string;
    globalProps: IGummybearWebBrowserGlobalProps;
}
interface IWebPageLayoutState {
    url: string;
    activeUrl: string;
    lastPress: number;
    title: string;
    loading: boolean;
    backButtonEnabled: boolean;
    forwardButtonEnabled: boolean;
    showInput: boolean;
    firstMoveY: number;
    isScrolling: boolean;
}
export declare class WebPageLayout extends React.Component<IWebPageLayoutProps, IWebPageLayoutState> {
    private webview;
    private timeout;
    constructor(props: IWebPageLayoutProps);
    componentDidMount(): Promise<void>;
    handleURL: (url: any) => void;
    componentWillUnmount(): void;
    renderFooter(): JSX.Element;
    renderHeader(): JSX.Element;
    renderLoading: () => any;
    render(): JSX.Element;
    handlePanResponderRelease: () => void;
    handlePanResponderGrant: (evt: any, gestureState: any) => void;
    handlePanResponderMove: (evt: any, gestureState: any) => void;
    handleHardwareBack: () => boolean;
    setupAnimations: () => void;
    handleNavigationStateChange: (navState: any) => void;
    onTwitterCallbackListener(activeUrl: any): void;
    handleLoad: (url: any) => void;
    handleReload: () => any;
    handleBack: () => any;
    handleForward: () => void;
    handleHome: () => void;
}
export {};
