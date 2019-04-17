import { IThemeVariables } from '@app/tools' // typings

export function spanProps(variables: IThemeVariables, platform, platformStyle) {
  return {
    height: 128,
    'NativeBase.Left': {
      alignSelf: 'flex-start'
    },
    'NativeBase.Body': {
      alignSelf: 'flex-end',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingBottom: 26
    },
    'NativeBase.Right': {
      alignSelf: 'flex-start'
    }
  }
}
