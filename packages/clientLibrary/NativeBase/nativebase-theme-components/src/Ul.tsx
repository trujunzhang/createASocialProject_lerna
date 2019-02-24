import { themeVariables } from '@app/native-base-variables'

export const ulTheme = (variables: themeVariables) => {
  const ulTheme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH1(),
    lineHeight: variables.lineHeightH1
  }

  return ulTheme
}
