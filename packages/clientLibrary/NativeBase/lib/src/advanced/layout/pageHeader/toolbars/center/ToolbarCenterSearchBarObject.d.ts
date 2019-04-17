import * as React from 'react';
import { IPageToolbarCenterSearchBarObject } from '@app/tools';
interface IToolbarCenterSearchBarObjectProps {
    searchBarObject: IPageToolbarCenterSearchBarObject;
}
interface IToolbarCenterSearchBarObjectState {
    isSearchBar: boolean;
    search: string;
}
export declare class ToolbarCenterSearchBarObject extends React.Component<IToolbarCenterSearchBarObjectProps, IToolbarCenterSearchBarObjectState> {
    constructor(props: IToolbarCenterSearchBarObjectProps, context: any);
    onSearchClosePress: () => void;
    search(): void;
    render(): JSX.Element;
}
export {};
