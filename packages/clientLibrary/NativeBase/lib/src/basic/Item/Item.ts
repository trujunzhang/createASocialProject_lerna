import * as React from 'react'

import { ReactNative, RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps'

export interface ItemProps {
  fixedLabel?: boolean
  floatingLabel?: boolean
  inlineLabel?: boolean
  stackedLabel?: boolean
  placeholderLabel?: boolean
  bordered?: boolean
  regular?: boolean
  underline?: boolean
  rounded?: boolean
  disabled?: boolean
  error?: boolean
  placeholder?: string
  secureTextEntry?: boolean
  success?: boolean
  last?: boolean
  picker?: boolean
  style?: RnViewStyleProp | Array<RnViewStyleProp>
  // Others
  label?: any
  value?: any
}
