import * as React from 'react';
export interface IExListSectionTitleProps {
    style?: any;
    text: string;
}
export interface IExListSectionTitleState {
}
export declare class ExListSectionTitle extends React.Component<IExListSectionTitleProps, IExListSectionTitleState> {
    constructor(props: IExListSectionTitleProps, context: any);
    renderBody(): JSX.Element;
    render(): JSX.Element;
}
