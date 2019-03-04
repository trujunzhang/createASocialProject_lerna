import { themeVariables } from '@app/native-base-variables'

export function getTextBase(variables: themeVariables, platform, platformStyle) {
  return {
    fontFamily: variables.btnFontFamily,
    marginLeft: 0,
    marginRight: 0,
    color: variables.inverseTextColor,
    fontSize: variables.btnTextSize(),
    paddingHorizontal: 16,
    backgroundColor: 'transparent'
    // childPosition: 1
  }
}
