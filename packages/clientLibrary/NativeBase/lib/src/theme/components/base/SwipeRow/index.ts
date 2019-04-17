import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const swipeRowTheme = (variables: IThemeVariables) => {
  const swipeRowTheme = {
    'NativeBase.ListItem': {
      '.list': {
        backgroundColor: '#FFF'
      },
      marginLeft: 0
    },
    'NativeBase.Left': {
      flex: 0,
      alignSelf: null,
      alignItems: null,
      'NativeBase.Button': {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderRadius: 0
      }
    },
    'NativeBase.Right': {
      flex: 0,
      alignSelf: null,
      alignItems: null,
      'NativeBase.Button': {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderRadius: 0
      }
    },
    'NativeBase.Button': {
      flex: 1,
      height: null,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      borderRadius: 0
    }
  }

  return swipeRowTheme
}
