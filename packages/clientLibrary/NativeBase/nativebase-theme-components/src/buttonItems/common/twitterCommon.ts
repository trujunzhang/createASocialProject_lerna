import { themeVariables } from '@app/native-base-variables'

export function getTwitterCommon(variables: themeVariables, platform, platformStyle) {
  const twitterCommon = {
    'NativeBase.Text': {
      color: variables.btnTwitterBg()
    },
    'NativeBase.Icon': {
      color: variables.btnTwitterBg()
    },
    'NativeBase.IconNB': {
      color: variables.btnTwitterBg()
    }
  }
  return twitterCommon
}
