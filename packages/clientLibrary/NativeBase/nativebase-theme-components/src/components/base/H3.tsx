import { themeVariables } from '@app/native-base-variables'
export const h3Theme = (variables: themeVariables) => {
  const h3Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH3(),
    lineHeight: variables.lineHeightH3
  }

  return h3Theme
}
