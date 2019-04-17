import * as React from 'react';
import { IPageToolbarParams } from '@app/tools';
interface IPageHeaderProps {
    transparent: boolean;
    parallax: boolean;
    noStatusBar: boolean;
    toolbarParams: IPageToolbarParams;
}
interface IPageHeaderState {
    hiddenHeader: boolean;
    hasSubtitle: boolean;
    useFixLeftAndRight: boolean;
    showLeftElement: boolean;
    showCenterElement: boolean;
    showRightElement: boolean;
}
export declare class PageHeader extends React.Component<IPageHeaderProps, IPageHeaderState> {
    constructor(props: IPageHeaderProps, context: any);
    renderLeft(): JSX.Element;
    renderRight(): JSX.Element;
    renderBody(): JSX.Element;
    render(): JSX.Element | null;
}
export {};
