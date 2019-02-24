import { themeVariables } from '@app/native-base-variables'
export const pageLayoutTheme = (variables: themeVariables) => {
  const pageLayoutTheme = {
    flex: 1,
    backgroundColor: variables.pageScrollBackground || 'red'
  }

  return pageLayoutTheme
}
