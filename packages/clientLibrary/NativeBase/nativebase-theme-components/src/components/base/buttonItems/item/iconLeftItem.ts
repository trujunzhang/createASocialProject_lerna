import { themeVariables } from '@app/native-base-variables'

export function getIconLeftItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    'NativeBase.Text': {
      marginLeft: 0
    },
    'NativeBase.IconNB': {
      marginRight: 0,
      marginLeft: 16
    },
    'NativeBase.Icon': {
      marginRight: 0,
      marginLeft: 16
    }
  }
}
