import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const fabTheme = (variables: IThemeVariables) => {
  const platform = variables.platform

  const fabTheme = {
    'NativeBase.Button': {
      alignItems: 'center',
      padding: null,
      justifyContent: 'center',
      'NativeBase.Icon': {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 0,
        marginRight: 0
      },
      'NativeBase.IconNB': {
        alignSelf: 'center',
        fontSize: 20,
        marginLeft: 0,
        marginRight: 0
      }
    }
  }

  return fabTheme
}
