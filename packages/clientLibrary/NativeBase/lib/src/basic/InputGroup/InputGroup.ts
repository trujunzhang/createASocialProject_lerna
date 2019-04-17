import * as React from 'react'

import { ReactNative, RnTextStyleProp } from '@appUtils/rnCommonProps'

/**
 * see Widget InputGroup.js
 */
export interface InputGroupProps extends ReactNative.ViewProps {
  /**
   * Wraps the textbox with predefined border options.
   * Default: underline
   */
  borderType?: 'rounded' | 'regular' | 'underline'
  toolbar?: boolean
  atoolbar?: boolean
  /**
   * If true, the icon in the input text box appears to the right.
   * Default: true
   */
  iconRight?: boolean
  /**
   * The border color of textbox for valid input.
   */
  success?: boolean
  /**
   * The border color of textbox for invalid input.
   */
  error?: boolean
  /**
   * Disables inputting data.
   */
  disabled?: boolean
  regular?: boolean
  underline?: boolean
  rounded?: boolean
}
