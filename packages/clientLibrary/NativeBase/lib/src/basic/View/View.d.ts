import { ReactNative, Testable } from '@appUtils/rnCommonProps';
export interface ViewNBProps extends ReactNative.ViewProps, Testable {
    padder?: boolean;
    name?: any;
}
export declare type ViewProps = ViewNBProps;
