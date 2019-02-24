import { themeVariables } from '@app/native-base-variables'
export const h2Theme = (variables: themeVariables) => {
  const h2Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH2(),
    lineHeight: variables.lineHeightH2
  }

  return h2Theme
}
