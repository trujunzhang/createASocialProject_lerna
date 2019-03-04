import { themeVariables } from '@app/native-base-variables'

export function getDangerCommon(variables: themeVariables, platform, platformStyle) {
  const dangerCommon = {
    'NativeBase.Text': {
      color: variables.btnDangerBg()
    },
    'NativeBase.Icon': {
      color: variables.btnDangerBg()
    },
    'NativeBase.IconNB': {
      color: variables.btnDangerBg()
    }
  }
  return dangerCommon
}
