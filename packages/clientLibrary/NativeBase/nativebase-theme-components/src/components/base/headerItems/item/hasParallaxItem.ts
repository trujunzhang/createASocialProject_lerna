import { themeVariables } from '@app/native-base-variables'

export function getHasParallaxItem(variables: themeVariables, platform, platformStyle) {
  return {
    // backgroundColor:'black',
    paddingTop: variables.toolbarParallaxPaddingTop,
    height: variables.toolbarParallaxHeight
  }
}
