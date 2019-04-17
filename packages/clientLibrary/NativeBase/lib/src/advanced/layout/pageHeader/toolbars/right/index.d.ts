import * as React from 'react';
import { IPageToolbarIconPressed, IPageToolbarRightElement } from '@app/tools';
interface IRightElementProps {
    onToolbarIconsPressed?: IPageToolbarIconPressed;
    rightElement: IPageToolbarRightElement;
}
interface IRightElementState {
}
export declare class RightElement extends React.Component<IRightElementProps, IRightElementState> {
    render(): any;
}
export {};
