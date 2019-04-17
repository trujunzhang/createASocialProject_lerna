import * as React from 'react';
import { RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps';
export interface AccordionProps {
    dataArray: Array<any>;
    headerStyle?: RnViewStyleProp;
    contentStyle?: RnViewStyleProp;
    renderHeader?: (item: any, expanded: boolean) => React.ReactElement<any>;
    renderContent?: (item: any) => React.ReactElement<any>;
    expanded?: number | any;
    icon?: string;
    expandedIcon?: string;
    iconStyle?: RnTextStyleProp;
    expandedIconStyle?: RnTextStyleProp;
    style?: RnViewStyleProp;
    animation?: any;
}
