import { ReactNative, RnViewStyleProp } from '@appUtils/rnCommonProps';
/**
 * vendor react-native-drawer
 */
interface DrawerStyles {
    drawer?: RnViewStyleProp | Array<RnViewStyleProp>;
    main?: RnViewStyleProp | Array<RnViewStyleProp>;
    drawerOverlay?: RnViewStyleProp | Array<RnViewStyleProp>;
    mainOverlay?: RnViewStyleProp | Array<RnViewStyleProp>;
}
export interface DrawerProps {
    acceptDoubleTap?: boolean;
    acceptPan?: boolean;
    acceptTap?: boolean;
    captureGestures?: boolean;
    children?: any;
    open?: boolean;
    closedDrawerOffset?: number;
    content?: any;
    deviceScreen?: ReactNative.ScaledSize;
    disabled?: boolean;
    initializeOpen?: boolean;
    negotiatePan?: boolean;
    onClose?: Function;
    onCloseStart?: Function;
    onOpen?: Function;
    onOpenStart?: Function;
    openDrawerOffset?: number;
    openDrawerThreshold?: number;
    panCloseMask?: number;
    panOpenMask?: number;
    panStartCompensation?: boolean;
    relativeDrag?: boolean;
    side?: 'left' | 'right';
    styles?: DrawerStyles;
    tapToClose?: boolean;
    tweenDuration?: number;
    tweenEasing?: string;
    tweenHandler?: Function;
    type?: 'overlay' | 'static' | 'displace';
}
export {};
