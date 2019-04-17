import * as React from 'react'
import { ReactNative, RnViewStyleProp, RnTextStyleProp } from '@appUtils/rnCommonProps'

export interface SeparatorProps {
  bordered?: boolean
  style?: RnViewStyleProp | Array<RnViewStyleProp>
  // Others
  noTopBorder?: boolean
}
