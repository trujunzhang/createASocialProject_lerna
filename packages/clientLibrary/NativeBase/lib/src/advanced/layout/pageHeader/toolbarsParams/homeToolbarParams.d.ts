import { IPageToolbarIconArray, IPageToolbarIconPressed, ToolbarRenderComponent } from '@app/tools';
export interface IHomeToolbarParamsParams {
    renderLeft?: () => ToolbarRenderComponent;
    rightIcons: IPageToolbarIconArray;
    onToolbarIconsRightPressed: IPageToolbarIconPressed;
    onSearchSubmitEditing: (text: string) => any;
    navigation: any;
}
export declare class HomeToolbarParams {
    private params;
    constructor(params: IHomeToolbarParamsParams);
    private getLeftElement;
    getParams(): any;
    private onToolbarIconsPressed;
}
