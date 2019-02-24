import { themeVariables } from '@app/native-base-variables'

export function getSpanItem(variables: themeVariables, platform, platformStyle) {
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
