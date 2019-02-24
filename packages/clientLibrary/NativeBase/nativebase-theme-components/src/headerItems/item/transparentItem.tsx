import { themeVariables } from '@app/native-base-variables'

export function getTransparentItem(variables: themeVariables, platform, platformStyle) {
  return {
    // backgroundColor: 'transparent',
    backgroundColor: 'orange',
    borderBottomColor: 'transparent',
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null,
    paddingTop: variables.toolbarPaddingTop,
    height: variables.toolbarHeight
  }
}
