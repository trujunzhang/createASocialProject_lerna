import * as React from 'react';
export interface ListItemLeftIcon {
    iconType: string;
    iconName: string;
}
export declare type ListItemLeftElement = string | ListItemLeftIcon;
export interface ListItemCenterElementObject {
    primaryText: string;
    secondaryText?: string;
    tertiaryText?: string;
}
export declare type ListItemCenterElement = string | ListItemCenterElementObject;
export declare type ListItemRightElement = string;
export interface IExListItemProps {
    onPress?: any;
    leftElement?: ListItemLeftElement;
    centerElement: ListItemCenterElement;
    rightElement?: ListItemRightElement;
}
export interface IExListItemState {
    hasLeft: boolean;
    oneLineCenter: boolean;
}
export declare class ExListItem extends React.Component<IExListItemProps, IExListItemState> {
    constructor(props: IExListItemProps, context: any);
    renderLeft(): JSX.Element | null;
    renderRight(): JSX.Element | null;
    renderBodyAsString(bodyString: string): JSX.Element;
    renderBodyAsObject(object: ListItemCenterElementObject): JSX.Element;
    renderBody(): JSX.Element | null;
    render(): JSX.Element;
}
