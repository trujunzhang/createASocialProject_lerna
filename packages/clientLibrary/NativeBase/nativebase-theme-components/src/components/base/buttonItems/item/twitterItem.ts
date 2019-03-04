import { themeVariables } from '@app/native-base-variables'

export function getTwitterItem(
  { twitterCommon },
  variables: themeVariables,
  platform,
  platformStyle
) {
  return {
    '.bordered': {
      ...twitterCommon
    },
    justifyContent: 'center',
    minWidth: 60,
    // flex:1,
    backgroundColor: variables.btnTwitterBg()
  }
}
