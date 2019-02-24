import { getHasTextItem, getTransparentItem } from './Button/item'

import { themeVariables } from '@app/native-base-variables'

export function getButtonBase(variables: themeVariables, platform, platformStyle) {
  return {
    '.hasText': getHasTextItem(variables, platform, platformStyle),
    '.transparent': getTransparentItem(variables, platform, platformStyle),
    'NativeBase.Icon': {
      color: variables.toolbarBtnColor
    },
    'NativeBase.IconNB': {
      color: variables.toolbarBtnColor
    },
    alignSelf: null,
    paddingRight: variables.buttonPadding,
    paddingLeft: platform === 'ios' && platformStyle !== 'material' ? 4 : 8
  }
}
