import * as React from 'react'
import { ReactNative, RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps'

export interface DatePickerProps {
  defaultDate?: Date
  minimumDate?: Date
  maximumDate?: Date
  locale?: string
  placeHolderText?: string
  textStyle?: RnTextStyleProp
  placeHolderTextStyle?: RnTextStyleProp
  androidMode?: 'calendar' | 'spinner' | 'default'
  timeZoneOffsetInMinutes?: number
  modalTransparent?: boolean
  animationType?: 'slide' | 'fade' | 'none'
  disabled?: boolean
  onDateChange?: (date: any) => void
  formatChosenDate?: (date: any) => void
}
