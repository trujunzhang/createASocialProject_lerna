import { Text as SAText, View, StyleSheet } from 'react-sketchapp'

export const getStylesForText = (style: any = {}) => {
  const fixedStyle = !!style ? style : {}

  const nextStyle: any = StyleSheet.flatten(fixedStyle)
  const textStyle = {
    fontSize: nextStyle.fontSize,
    fontFamily: nextStyle.fontFamily,
    fontWeight: nextStyle.fontWeight,
    color: nextStyle.color,
    textAlign: nextStyle.textAlign
  }

  const viewStyle = Object.assign(nextStyle)
  delete viewStyle.fontSize
  delete viewStyle.fontFamily
  delete viewStyle.fontWeight
  delete viewStyle.color
  delete viewStyle.textAlign

  // console.log('Text, (viewStyle): ', JSON.stringify(viewStyle))
  // console.log('Text, (textStyle): ', JSON.stringify(textStyle))
  return {
    viewStyle,
    textStyle
  }
}
