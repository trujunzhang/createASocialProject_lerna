import * as React from 'react'

import { ReactNative, RnViewStyleProp, RnTextStyleProp, BsStyle } from '@appUtils/rnCommonProps'

/**
 * see Widget Button.js
 */
export interface ButtonProps extends ReactNative.TouchableOpacityProps, BsStyle {
  /**
   * Defines button style
   */
  style?: RnViewStyleProp | Array<RnViewStyleProp>
  /**
   * Defines button text style
   */
  textStyle?: RnTextStyleProp
  // onPress?: () => void
  /**
   * Block level button
   */
  block?: boolean
  /**
   * Vertical button
   */
  vertical?: boolean
  /**
   * Button with badges
   */
  badge?: boolean
  //primary?: boolean,
  /**
   * Gives you effect of Icon-buttons.
   * To have button with transparent background, include this prop.
   */
  transparent?: boolean
  //success?: boolean,
  //danger?: boolean,
  // warning?: boolean,
  //info?: boolean,
  color?: string
  /**
   * Applies outline button style.
   */
  bordered?: boolean
  /**
   * Renders button with slightly round shaped edges.
   */
  rounded?: boolean
  /**
   * For large size button
   */
  large?: boolean
  /**
   * For small size button
   */
  small?: boolean
  /**
   * Used for Icon alignment.
   * Aligns icon to the left in button.
   * By default, icons are aligned to the left in button.
   */
  iconLeft?: boolean
  /**
   * Used for Icon alignment.
   * Aligns icon to the right in button.
   */
  iconRight?: boolean
  /**
   * Used to enable/disable icons
   * Icons align in the center of the button.
   */
  icon?: boolean
  /**
   * Disables onPress option for button
   */
  disabled?: boolean
  active?: boolean
  inputButton?: boolean
  full?: boolean
  light?: boolean
  dark?: boolean
  /**
   * [android] colored ripple effect
   */
  androidRippleColor?: string
  /**
   * Segments
   */
  first?: boolean
  last?: boolean
  /**
   * Adds necessary padding when Text button defined in Left / Right of Header (iOS)
   */
  hasText?: boolean
  // Others
  activeOpacity?: any
  onlyCenter?: boolean
  facebook?: boolean
  twitter?: boolean
  svgLeft?: boolean
}
