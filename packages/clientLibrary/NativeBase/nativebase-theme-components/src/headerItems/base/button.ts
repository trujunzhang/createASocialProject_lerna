import { themeVariables } from '@app/native-base-variables'

export function getButtonBase(variables: themeVariables, platform, platformStyle) {
  return {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    '.transparent': {
      'NativeBase.Text': {
        color: variables.toolbarBtnTextColor,
        fontWeight: '600'
      },
      'NativeBase.Icon': {
        color: variables.toolbarBtnColor
      },
      'NativeBase.IconNB': {
        color: variables.toolbarBtnColor
      },
      paddingHorizontal: variables.buttonPadding
    },
    paddingHorizontal: 15
  }
}
