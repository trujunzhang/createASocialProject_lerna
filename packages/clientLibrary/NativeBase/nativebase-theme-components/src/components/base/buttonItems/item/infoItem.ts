import { themeVariables } from '@app/native-base-variables'

export function getInfoItem({ infoCommon }, variables: themeVariables, platform, platformStyle) {
  return {
    '.bordered': {
      ...infoCommon
    },
    backgroundColor: variables.btnInfoBg()
  }
}
