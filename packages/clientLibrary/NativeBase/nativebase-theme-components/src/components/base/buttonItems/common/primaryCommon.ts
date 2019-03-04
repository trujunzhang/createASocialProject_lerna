import { themeVariables } from '@app/native-base-variables'

export function getPrimaryCommon(variables: themeVariables, platform, platformStyle) {
  const primaryCommon = {
    'NativeBase.Text': {
      color: variables.btnPrimaryBg()
    },
    'NativeBase.Icon': {
      color: variables.btnPrimaryBg()
    },
    'NativeBase.IconNB': {
      color: variables.btnPrimaryBg()
    }
  }
  return primaryCommon
}
