import { themeVariables } from '@app/native-base-variables'

export function getFullItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 0
  }
}
