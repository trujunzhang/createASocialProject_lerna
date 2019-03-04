import { themeVariables } from '@app/native-base-variables'

export function getDisabledItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    '.transparent': {
      backgroundColor: null,
      'NativeBase.Text': {
        color: variables.btnDisabledBg
      },
      'NativeBase.Icon': {
        color: variables.btnDisabledBg
      },
      'NativeBase.IconNB': {
        color: variables.btnDisabledBg
      }
    },
    'NativeBase.Icon': {
      color: variables.brandLight
    },
    'NativeBase.IconNB': {
      color: variables.brandLight
    },
    backgroundColor: variables.btnDisabledBg
  }
}
