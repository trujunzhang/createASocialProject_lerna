import { themeVariables } from '@app/native-base-variables'

export function getSmallItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    height: 30,
    'NativeBase.Text': {
      fontSize: 14
    },
    'NativeBase.Icon': {
      fontSize: 20,
      paddingTop: 0
    },
    'NativeBase.IconNB': {
      fontSize: 20,
      paddingTop: 0
    }
  }
}
