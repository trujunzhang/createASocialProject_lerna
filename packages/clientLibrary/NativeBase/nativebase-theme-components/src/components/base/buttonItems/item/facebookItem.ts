import { themeVariables } from '@app/native-base-variables'

export function getFacebookItem(
  { facebookCommon },
  variables: themeVariables,
  platform,
  platformStyle
) {
  return {
    '.bordered': {
      ...facebookCommon
    },
    justifyContent: 'center',
    minWidth: 60,
    // flex:1,
    backgroundColor: variables.btnFacebookBg()
  }
}
