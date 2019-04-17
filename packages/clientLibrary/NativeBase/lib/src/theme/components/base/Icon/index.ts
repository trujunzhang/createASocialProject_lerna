import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const iconTheme = (variables: IThemeVariables) => {
  const iconTheme = {
    fontSize: variables.iconFontSize,
    color: '#000'
  }

  return iconTheme
}
