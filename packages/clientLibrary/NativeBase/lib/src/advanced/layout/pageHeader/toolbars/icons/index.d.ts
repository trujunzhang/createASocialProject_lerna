import * as React from 'react';
import { IPageToolbarIcon, IPageToolbarIconPressed } from '@app/tools';
interface IToolbarIconsProps {
    icons: IPageToolbarIcon[];
    onToolbarIconsPressed?: IPageToolbarIconPressed;
}
interface IToolbarIconsState {
}
export declare class ToolbarIcons extends React.Component<IToolbarIconsProps, IToolbarIconsState> {
    render(): JSX.Element[];
}
export {};
