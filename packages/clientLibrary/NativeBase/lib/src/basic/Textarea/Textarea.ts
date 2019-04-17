import * as React from 'react'

import { ReactNative, RnViewStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget Textarea.js
 */
export interface TextareaProps extends ReactNative.TextInputProps {
  rowSpan: number
  // Others
  bordered?: any
}
