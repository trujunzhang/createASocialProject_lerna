import * as React from 'react'

import { ReactNative, RnViewStyleProp } from '@appUtils/rnCommonProps'

export interface TextProps extends ReactNative.TextProps {
  note?: boolean
  uppercase?: boolean
  // Others
  center?: boolean
}
