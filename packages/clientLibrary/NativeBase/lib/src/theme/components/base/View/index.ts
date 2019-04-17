import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const viewTheme = (variables: IThemeVariables) => {
  const viewTheme = {
    '.padder': {
      padding: variables.contentPadding
    }
  }

  return viewTheme
}
