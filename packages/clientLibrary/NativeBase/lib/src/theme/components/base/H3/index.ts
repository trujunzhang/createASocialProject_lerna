import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const h3Theme = (variables: IThemeVariables) => {
  const h3Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3
  }

  return h3Theme
}
