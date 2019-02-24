import { themeVariables } from '@app/native-base-variables'

export const pTheme = (variables: themeVariables) => {
  const pTheme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH1(),
    lineHeight: variables.lineHeightH1
  }

  return pTheme
}
