import * as React from 'react'

import { ReactNative, RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps'

export interface TabHeadingProps {
  tabStyle?: RnViewStyleProp | Array<RnViewStyleProp>
  activeTabStyle?: RnViewStyleProp | Array<RnViewStyleProp>
  textStyle?: RnTextStyleProp
  activeTextStyle?: RnTextStyleProp
  style?: RnViewStyleProp | Array<RnViewStyleProp>
}
