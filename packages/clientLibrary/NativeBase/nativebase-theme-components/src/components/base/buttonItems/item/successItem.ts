import { themeVariables } from '@app/native-base-variables'

export function getSuccessItem(
  { successCommon },
  variables: themeVariables,
  platform,
  platformStyle
) {
  return {
    '.bordered': {
      ...successCommon
    },
    backgroundColor: variables.btnSuccessBg()
  }
}
