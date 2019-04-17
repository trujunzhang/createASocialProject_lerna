import { ListSwipeHelper } from '@app/tools';
import { IListBaseProps } from '../../List/List';
export interface ISwipeRow extends IListBaseProps {
    leftOpenValue?: number;
    rightOpenValue?: number;
    closeOnRowPress: boolean;
    disableLeftSwipe?: boolean;
    disableRightSwipe?: boolean;
    recalculateHiddenLayout?: boolean;
    preview?: boolean;
    directionalDistanceChangeThreshold?: number;
    swipeToOpenPercent?: number;
    onRowOpen?: Function;
    onRowClose?: Function;
    left?: React.ReactElement<any>;
    body?: any;
    right?: React.ReactElement<any>;
    style?: any;
}
export interface IListSwipeRowProps extends ISwipeRow {
    list: boolean;
    closeOnRowBeginSwipe?: boolean;
    cellIdentifier: string;
    listSwipeHelper: ListSwipeHelper;
    recalculateHiddenLayout?: boolean;
    onRowOpen?: any;
    onRowClose?: any;
    onRowDidOpen?: any;
    onRowDidClose?: any;
    leftOpenValue?: number;
    rightOpenValue?: number;
    left?: any;
    right?: any;
    body?: any;
}
