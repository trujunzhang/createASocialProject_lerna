import { themeVariables } from '@app/native-base-variables'

export const liTheme = (variables: themeVariables) => {
  const liTheme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH1(),
    lineHeight: variables.lineHeightH1
  }

  return liTheme
}
