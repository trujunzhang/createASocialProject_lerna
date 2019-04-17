import * as React from 'react'

import { IconProps as Icon } from '../Icon/Icon'

import { ReactNative, RnViewStyleProp, RnTextStyleProp } from '@appUtils/rnCommonProps'

export interface PickerProps extends ReactNative.PickerProps {
  mode?: 'dialog' | 'dropdown'
  supportedOrientations?: 'portrait' | 'landscape'
  iosHeader?: string
  inlineLabel?: boolean
  headerBackButtonText?: string
  placeholder?: string
  placeholderStyle?: RnTextStyleProp
  textStyle?: RnTextStyleProp
  style?: RnTextStyleProp
  iosIcon?: React.ReactElement<Icon>
  note?: boolean
  placeholderIconColor?: string
  itemTextStyle?: RnTextStyleProp
  headerStyle?: RnViewStyleProp
  headerTitleStyle?: RnTextStyleProp
  headerBackButtonTextStyle?: RnTextStyleProp
  modalStyle?: RnViewStyleProp
  renderHeader?: (backAction: any) => React.ReactElement<any>
  // Others
  selectedValue?: any
  onValueChange?: any
  itemStyle?: any
}
