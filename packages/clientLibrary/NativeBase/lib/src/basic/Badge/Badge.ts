import * as React from 'react'

import { ReactNative, BsStyle } from '@appUtils/rnCommonProps'

export interface BadgeProps extends ReactNative.ViewProps, BsStyle {
  // Others
  textStyle?: any
}
