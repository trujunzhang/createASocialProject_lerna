import { themeVariables } from '@app/native-base-variables'

export function getDangerItem(
  { dangerCommon },
  variables: themeVariables,
  platform,
  platformStyle
) {
  return {
    '.bordered': {
      ...dangerCommon
    },
    backgroundColor: variables.btnDangerBg()
  }
}
