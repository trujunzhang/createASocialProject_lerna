import * as React from 'react';
import { IPageToolbarIconPressed, IPageToolbarLeftElement } from '@app/tools';
interface ILeftElementProps {
    onToolbarIconsPressed?: IPageToolbarIconPressed;
    leftElement: IPageToolbarLeftElement;
}
interface ILeftElementState {
}
export declare class LeftElement extends React.Component<ILeftElementProps, ILeftElementState> {
    render(): any;
}
export {};
