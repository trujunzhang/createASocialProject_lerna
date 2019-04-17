import * as React from 'react';
import { ReactNative, ReactListViewProps } from '@appUtils/rnCommonProps';
export interface IListBaseProps {
    stopLeftSwipe?: number;
    stopRightSwipe?: number;
    previewDuration?: number;
    previewOpenValue?: any;
    tension?: any;
    friction?: any;
}
/**
 * see Widget List.js
 */
export interface ListProps extends ReactListViewProps, IListBaseProps {
    listBorderColor?: string;
    listDividerBg?: string;
    listNoteColor?: string;
    listItemPadding?: number;
    listNoteSize?: number;
    inset?: boolean;
    /**
     * Array of data chunks to render iteratively.
     */
    dataArray?: Array<any>;
    renderRow?: (rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean) => React.ReactElement<any>;
    dataSource?: ReactNative.ListViewDataSource;
    disableLeftSwipe?: boolean;
    disableRightSwipe?: boolean;
    rightOpenValue?: number;
    leftOpenValue?: number;
    renderRightHiddenRow?: (rowData: any, sectionID: string | number, rowID: string | number, rowMap?: any) => React.ReactElement<any>;
    renderLeftHiddenRow?: (rowData: any, sectionID: string | number, rowID: string | number, rowMap?: any) => React.ReactElement<any>;
    rowHasChanged?: (r1: any, r2: any) => boolean;
    onRowOpen?: Function;
    onRowClose?: Function;
    onRowDidOpen?: Function;
    onRowDidClose?: Function;
    swipeToOpenPercent?: number;
    closeOnRowBeginSwipe?: boolean;
    swipeRowStyle?: any;
    previewRowIndex?: number;
    shoulderRenderSwiperRowsAsChildren?: boolean;
    listViewRef?: any;
    onScroll?: any;
}
export interface IListDefaultProps {
    leftOpenValue: number;
    rightOpenValue: number;
    closeOnRowBeginSwipe: boolean;
    closeOnScroll: boolean;
    closeOnRowPress: boolean;
    disableLeftSwipe: boolean;
    disableRightSwipe: boolean;
    recalculateHiddenLayout: boolean;
    previewFirstRow: boolean;
    directionalDistanceChangeThreshold: number;
    swipeToOpenPercent: number;
}
