import { themeVariables } from '@app/native-base-variables'

export function getHasTextItem(variables: themeVariables, platform, platformStyle) {
  return {
    marginLeft: -10,
    height: 30,
    'NativeBase.Icon': {
      color: variables.toolbarBtnColor,
      fontSize: variables.iconHeaderSize,
      marginTop: 2,
      marginRight: 5,
      marginLeft: 2
    },
    'NativeBase.Text': {
      color: variables.toolbarBtnTextColor,
      fontSize: platform === 'ios' ? 17 : 0,
      marginLeft: 7,
      lineHeight: 19.5
    },
    'NativeBase.IconNB': {
      color: variables.toolbarBtnColor,
      fontSize: variables.iconHeaderSize,
      marginTop: 2,
      marginRight: 5,
      marginLeft: 2
    }
  }
}
