import { themeVariables } from '@app/native-base-variables'

export function getLightCommon(variables: themeVariables, platform, platformStyle) {
  const lightCommon = {
    'NativeBase.Text': {
      color: variables.brandLight
    },
    'NativeBase.Icon': {
      color: variables.brandLight
    },
    'NativeBase.IconNB': {
      color: variables.brandLight
    }
  }
  return lightCommon
}
