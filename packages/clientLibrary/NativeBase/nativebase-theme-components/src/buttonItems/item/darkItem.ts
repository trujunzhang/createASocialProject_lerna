import { themeVariables } from '@app/native-base-variables'

export function getDarkItem({ darkCommon }, variables: themeVariables, platform, platformStyle) {
  return {
    '.bordered': {
      ...darkCommon
    },
    backgroundColor: variables.brandDark
  }
}
