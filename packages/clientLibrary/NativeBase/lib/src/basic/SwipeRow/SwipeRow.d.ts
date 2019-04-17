import * as React from 'react';
import { RnViewStyleProp } from '@appUtils/rnCommonProps';
export interface SwipeRowProps {
    leftOpenValue?: number;
    rightOpenValue: number;
    closeOnRowPress?: boolean;
    disableLeftSwipe?: boolean;
    disableRightSwipe?: boolean;
    recalculateHiddenLayout?: boolean;
    preview?: boolean;
    previewDuration?: number;
    directionalDistanceChangeThreshold?: number;
    swipeToOpenPercent?: number;
    stopLeftSwipe?: number;
    stopRightSwipe?: number;
    onRowOpen?: Function;
    onRowClose?: Function;
    left?: React.ReactElement<any>;
    body?: React.ReactElement<any>;
    right?: React.ReactElement<any>;
    style?: RnViewStyleProp;
    previewOpenValue?: any;
    setScrollEnabled?: any;
    swipeGestureBegan?: any;
    friction?: any;
    tension?: any;
    onRowDidClose?: any;
    onRowDidOpen?: any;
    list?: boolean;
}
export interface ISwipRowState {
    dimensionsSet: boolean;
    hiddenHeight: number;
    hiddenWidth: number;
}
