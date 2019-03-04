import { ColorUtils as Color } from '@app/tools'

import { themeVariables } from '@app/native-base-variables'
export const textTheme = (variables: themeVariables) => {
  const textTheme = {
    '.center': {
      textAlign: 'center'
      // color: 'red',
      // backgroundColor:'blue'
    },
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    '.note': {
      // color: '#a7a7a7',
      color: Color('black')
        .alpha(0.54)
        .toString(),
      fontSize: variables.noteFontSize
    }
  }

  return textTheme
}
