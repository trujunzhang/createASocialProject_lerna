import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const rightTheme = (variables: IThemeVariables) => {
  const rightTheme = {
    'NativeBase.Button': {
      alignSelf: null
    },
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end'
  }

  return rightTheme
}
