import { themeVariables } from '@app/native-base-variables'

export function getWarningItem(
  { warningCommon },
  variables: themeVariables,
  platform,
  platformStyle
) {
  return {
    '.bordered': {
      ...warningCommon
    },
    backgroundColor: variables.btnWarningBg()
  }
}
