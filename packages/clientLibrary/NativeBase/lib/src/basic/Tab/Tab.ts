import * as React from 'react'

import { ReactNative, RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps'

import { TabHeadingProps } from '../TabHeading/TabHeading'

export interface TabProps {
  heading: React.ReactElement<TabHeadingProps> | string
  tabStyle?: RnViewStyleProp | Array<RnViewStyleProp>
  activeTabStyle?: RnViewStyleProp | Array<RnViewStyleProp>
  textStyle?: RnTextStyleProp
  activeTextStyle?: RnTextStyleProp
}
