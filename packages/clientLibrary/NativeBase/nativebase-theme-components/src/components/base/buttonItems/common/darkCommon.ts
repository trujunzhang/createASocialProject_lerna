import { themeVariables } from '@app/native-base-variables'

export function getDarkCommon(variables: themeVariables, platform, platformStyle) {
  const darkCommon = {
    'NativeBase.Text': {
      color: variables.brandDark
    },
    'NativeBase.Icon': {
      color: variables.brandDark
    },
    'NativeBase.IconNB': {
      color: variables.brandDark
    }
  }
  return darkCommon
}
