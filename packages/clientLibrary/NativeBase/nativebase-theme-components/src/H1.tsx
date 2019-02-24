import { themeVariables } from '@app/native-base-variables'

export const h1Theme = (variables: themeVariables) => {
  const h1Theme = {
    '.center': {
      textAlign: 'center'
      // color: 'red',
      // backgroundColor:'blue'
    },
    color: variables.textColor,
    fontSize: variables.fontSizeH1(),
    lineHeight: variables.lineHeightH1
  }

  return h1Theme
}
