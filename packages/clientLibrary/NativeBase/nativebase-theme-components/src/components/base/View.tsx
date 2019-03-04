import { themeVariables } from '@app/native-base-variables'

export const viewTheme = (variables: themeVariables) => {
  const viewTheme = {
    '.padder': {
      padding: variables.contentPadding
    }
  }

  return viewTheme
}
