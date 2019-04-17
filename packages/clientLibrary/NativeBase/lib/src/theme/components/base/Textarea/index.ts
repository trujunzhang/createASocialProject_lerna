import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const textAreaTheme = (variables: IThemeVariables) => {
  const textAreaTheme = {
    '.underline': {
      borderBottomWidth: variables.borderWidth,
      marginTop: 5,
      borderColor: variables.inputBorderColor
    },
    '.bordered': {
      borderWidth: 1,
      marginTop: 5,
      borderColor: variables.inputBorderColor
    },
    color: variables.textColor,
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 15,
    textAlignVertical: 'top'
  }

  return textAreaTheme
}
