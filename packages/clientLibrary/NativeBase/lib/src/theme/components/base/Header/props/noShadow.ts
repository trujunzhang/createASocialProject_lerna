import { IThemeVariables } from '@app/tools' // typings

export function noShadowProps(variables: IThemeVariables, platform, platformStyle) {
  return {
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowRadius: null,
    shadowOpacity: null
  }
}
