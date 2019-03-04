import { themeVariables } from '@app/native-base-variables'

export function getIconRightItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Text': {
      marginRight: 0
    },
    'NativeBase.IconNB': {
      marginLeft: 0,
      marginRight: 16
    },
    'NativeBase.Icon': {
      marginLeft: 0,
      marginRight: 16
    }
  }
}
