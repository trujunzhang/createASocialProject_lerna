import * as React from 'react'

import { ReactNative, RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps'

export interface AccordionProps {
  dataArray: Array<any>
  headerStyle?: RnViewStyleProp
  contentStyle?: RnViewStyleProp
  renderHeader?: (item: any, expanded: boolean) => React.ReactElement<any>
  renderContent?: (item: any) => React.ReactElement<any>
  // expanded?: number
  expanded?: number | any // TODO: DJZHANG
  icon?: string
  expandedIcon?: string
  iconStyle?: RnTextStyleProp
  expandedIconStyle?: RnTextStyleProp
  style?: RnViewStyleProp
  // Others
  animation?: any
}
