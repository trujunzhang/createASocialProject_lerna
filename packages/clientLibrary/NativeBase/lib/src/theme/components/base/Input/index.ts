import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const inputTheme = (variables: IThemeVariables) => {
  const inputTheme = {
    '.multiline': {
      height: null
    },
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    fontSize: variables.inputFontSize
  }

  return inputTheme
}
