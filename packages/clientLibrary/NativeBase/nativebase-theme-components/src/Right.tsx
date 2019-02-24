import { themeVariables } from '@app/native-base-variables'
export const rightTheme = (variables: themeVariables) => {
  const rightTheme = {
    'NativeBase.Button': {
      alignSelf: null
    },
    // flex: 1,
    width: 44,
    alignSelf: 'center',
    alignItems: 'flex-end'
  }

  return rightTheme
}
