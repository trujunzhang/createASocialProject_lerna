import * as React from 'react';
import { IPageToolbarIconPressed, IPageToolbarVisible } from '@app/tools';
export interface IToolbarNormalParamsParams {
    navigation?: any;
    leftIcons?: any;
    renderLeft?: () => React.Component;
    rightIcons?: any;
    renderCenter?: () => React.Component;
    title?: string;
    subTitle?: string;
    onToolbarIconsPressed?: IPageToolbarIconPressed;
    visible?: IPageToolbarVisible;
}
export declare const getToolbarNormalParams: (params: IToolbarNormalParamsParams) => any;
