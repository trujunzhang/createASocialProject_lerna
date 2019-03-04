import { themeVariables } from '@app/native-base-variables'

export function getInfoCommon(variables: themeVariables, platform, platformStyle) {
  const infoCommon = {
    'NativeBase.Text': {
      color: variables.btnInfoBg()
    },
    'NativeBase.Icon': {
      color: variables.btnInfoBg()
    },
    'NativeBase.IconNB': {
      color: variables.btnInfoBg()
    }
  }
  return infoCommon
}
