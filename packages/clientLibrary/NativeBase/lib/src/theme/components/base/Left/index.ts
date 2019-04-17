import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const leftTheme = (variables: IThemeVariables) => {
  const leftTheme = {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-start'
  }

  return leftTheme
}
