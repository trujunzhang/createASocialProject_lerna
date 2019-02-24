import { themeVariables } from '@app/native-base-variables'
export const fixRightTheme = (variables: themeVariables) => {
  const fixRightTheme = {
    'NativeBase.Button': {
      alignSelf: null
    },
    alignSelf: 'center',
    alignItems: 'flex-end'
  }

  return fixRightTheme
}
