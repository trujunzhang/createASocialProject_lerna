import { themeVariables } from '@app/native-base-variables'
export const contentTheme = (variables: themeVariables) => {
  const contentTheme = {
    flex: 1,
    backgroundColor: 'transparent',
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent'
    }
  }

  return contentTheme
}
