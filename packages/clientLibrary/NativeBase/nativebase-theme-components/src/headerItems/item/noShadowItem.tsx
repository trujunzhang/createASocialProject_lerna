import { themeVariables } from '@app/native-base-variables'

export function getNoShadowItem(variables: themeVariables, platform, platformStyle) {
  return {
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null
  }
}
