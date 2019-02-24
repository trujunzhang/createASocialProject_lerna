import { themeVariables } from '@app/native-base-variables'

export function getSuccessCommon(variables: themeVariables, platform, platformStyle) {
  const successCommon = {
    'NativeBase.Text': {
      color: variables.btnSuccessBg()
    },
    'NativeBase.Icon': {
      color: variables.btnSuccessBg()
    },
    'NativeBase.IconNB': {
      color: variables.btnSuccessBg()
    }
  }
  return successCommon
}
