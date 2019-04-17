import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListSwipeHelper } from '@app/tools';
import { IPageToolbarParams } from '@app/tools';
export interface IParallaxPageScrollLayoutProps {
    fixedToolbarParams: IPageToolbarParams;
    stickyToolbarParams: IPageToolbarParams;
    listSwipeHelper: ListSwipeHelper;
    renderStickyHeader?: any;
    hasStickyHeaderTransparent?: boolean;
    renderParallaxHeader: any;
    backgroundColor: string;
    backgroundScrollSpeed?: number;
    fadeOutForeground?: boolean;
    fadeOutBackground?: boolean;
    contentBackgroundColor: string;
    onChangeHeaderVisibility?: any;
    parallaxHeaderHeight: number;
    renderBackground: any;
    renderContentBackground: any;
    renderForeground: any;
    renderScrollComponent?: any;
    stickyHeaderHeight: number;
    contentContainerStyle?: any;
    outputScaleValue?: number;
    style?: any;
    onScroll?: any;
    scrollEvent?: any;
}
interface IParallaxPageScrollLayoutStats {
    scrollEnabled: boolean;
    viewWidth: number;
    viewHeight: number;
    scrollY: any;
}
export declare class ParallaxPageScrollLayout extends React.Component<IParallaxPageScrollLayoutProps, IParallaxPageScrollLayoutStats> {
    static contextTypes: {
        theme: PropTypes.Requireable<object>;
    };
    private containerHeight;
    private scrollY;
    private _footerComponent;
    private _footerHeight;
    private _root;
    static defaultProps: {
        backgroundScrollSpeed: number;
        backgroundColor: string;
        contentBackgroundColor: string;
        fadeOutForeground: boolean;
        onChangeHeaderVisibility: () => void;
        renderScrollComponent: (props: any) => JSX.Element;
        renderBackground: () => JSX.Element;
        renderContentBackground: () => JSX.Element;
        renderParallaxHeader: () => JSX.Element;
        renderForeground: null;
        stickyHeaderHeight: number;
        contentContainerStyle: null;
        outputScaleValue: number;
    };
    constructor(props: IParallaxPageScrollLayoutProps);
    animatedEvent: (...args: any[]) => void;
    render(): JSX.Element;
    renderContent(): JSX.Element;
    getScrollResponder: () => any;
    getScrollableNode(): any;
    getInnerViewNode(): any;
    scrollTo(...args: any[]): void;
    setNativeProps(props: any): void;
    _onScroll(e: any): void;
    _maybeUpdateScrollPosition(e: any): void;
    _maybeUpdateViewDimensions(e: any): void;
    _renderBackground({ fadeOutBackground, backgroundScrollSpeed, backgroundColor, parallaxHeaderHeight, stickyHeaderHeight, renderBackground, outputScaleValue }: {
        fadeOutBackground: any;
        backgroundScrollSpeed: any;
        backgroundColor: any;
        parallaxHeaderHeight: any;
        stickyHeaderHeight: any;
        renderBackground: any;
        outputScaleValue: any;
    }): JSX.Element;
    _renderForeground({ fadeOutForeground, parallaxHeaderHeight, stickyHeaderHeight, renderForeground }: {
        fadeOutForeground: any;
        parallaxHeaderHeight: any;
        stickyHeaderHeight: any;
        renderForeground: any;
    }): JSX.Element;
    _wrapChildren(children: any, { contentBackgroundColor, stickyHeaderHeight, contentContainerStyle, renderContentBackground }: {
        contentBackgroundColor: any;
        stickyHeaderHeight: any;
        contentContainerStyle: any;
        renderContentBackground: any;
    }): JSX.Element;
    _renderFooterSpacer({ contentBackgroundColor }: {
        contentBackgroundColor: any;
    }): JSX.Element;
    renderParallaxStickyHeaderContent(): JSX.Element;
    renderParallaxStickyHeader(stickyHeaderHeight: any, p: any, scrollY: any): JSX.Element;
    renderParallaxFixedHeader(): JSX.Element;
    _maybeRenderStickyHeader({ parallaxHeaderHeight, stickyHeaderHeight }: {
        parallaxHeaderHeight: any;
        stickyHeaderHeight: any;
    }): JSX.Element;
}
export {};
