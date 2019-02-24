import { themeVariables } from '@app/native-base-variables'

export function getWarningCommon(variables: themeVariables, platform, platformStyle) {
  const warningCommon = {
    'NativeBase.Text': {
      color: variables.btnWarningBg()
    },
    'NativeBase.Icon': {
      color: variables.btnWarningBg()
    },
    'NativeBase.IconNB': {
      color: variables.btnWarningBg()
    }
  }
  return warningCommon
}
