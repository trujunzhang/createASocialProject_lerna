import {
  getFloatingLabelItem,
  getStackedLabelItem,
  getInlineLabelItem,
  getFixedLabelItem,
  getUnderLineItem,
  getRoundedItem,
  getRegularItem,
  getSuccessItem,
  getDisabledItem,
  getErrorItem,
  getPickerItem,
  getButtonBase,
  getIconBase,
  getIconNBBase,
  getInputBase,
  getLabelBase
} from './itemItems'

import { themeVariables } from '@app/native-base-variables'
export const itemTheme = (variables: themeVariables) => {
  const itemTheme = {
    '.floatingLabel': getFloatingLabelItem(variables),
    '.fixedLabel': getFixedLabelItem(variables),
    '.stackedLabel': getStackedLabelItem(variables),
    '.inlineLabel': getInlineLabelItem(variables),

    'NativeBase.Label': getLabelBase(variables),
    'NativeBase.Button': getButtonBase(variables),
    'NativeBase.Icon': getIconBase(variables),
    'NativeBase.IconNB': getIconNBBase(variables),
    'NativeBase.Input': getInputBase(variables),

    '.underline': getUnderLineItem(variables),
    '.regular': getRegularItem(variables),
    '.rounded': getRoundedItem(variables),
    '.success': getSuccessItem(variables),
    '.error': getErrorItem(variables),
    '.disabled': getDisabledItem(variables),
    '.picker': getPickerItem(variables),

    borderWidth: variables.borderWidth * 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: variables.inputBorderColor,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2
  }

  return itemTheme
}
