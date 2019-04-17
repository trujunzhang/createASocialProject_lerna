import * as React from 'react'

import { ReactNative, RnViewStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget Input.js
 */
export interface InputProps extends ReactNative.TextInputProps {
  label?: string
  /**
   * Label placed to the left of the input element.
   * When the user enters text, the label does not hide.
   * This can also be used along with placeholder.
   */
  inlineLabel?: boolean
  /**
   * Places the label on top of the input element which appears like a stack.
   * This can also be used along with placeholder.
   */
  stackedLabel?: boolean
  /**
   * Disables inputting data.
   */
  disabled?: boolean
  getRef?: React.Ref<ReactNative.TextInput>
}
