import { themeVariables } from '@app/native-base-variables'

export function getFacebookCommon(variables: themeVariables, platform, platformStyle) {
  const facebookCommon = {
    'NativeBase.Text': {
      color: variables.btnFacebookBg()
    },
    'NativeBase.Icon': {
      color: variables.btnFacebookBg()
    },
    'NativeBase.IconNB': {
      color: variables.btnFacebookBg()
    }
  }
  return facebookCommon
}
