import { themeVariables } from '@app/native-base-variables'

export function getPrimaryItem(
  { primaryCommon },
  variables: themeVariables,
  platform,
  platformStyle
) {
  return {
    '.bordered': {
      ...primaryCommon
    },
    backgroundColor: variables.btnPrimaryBg()
  }
}
