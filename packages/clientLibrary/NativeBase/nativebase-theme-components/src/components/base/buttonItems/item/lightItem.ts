import { themeVariables } from '@app/native-base-variables'

export function getLightItem(
  { lightCommon, darkCommon },
  variables: themeVariables,
  platform,
  platformStyle
) {
  return {
    '.transparent': {
      ...lightCommon,
      backgroundColor: null
    },
    '.bordered': {
      ...lightCommon
    },
    ...darkCommon,
    backgroundColor: variables.brandLight
  }
}
