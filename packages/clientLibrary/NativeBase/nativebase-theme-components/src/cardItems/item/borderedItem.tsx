import { themeVariables } from '@app/native-base-variables'

export function getBorderedItem(variables: themeVariables, platform) {
  const themePlatformFunc = variables.themePlatformFunc
  return {
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: themePlatformFunc.getStyleHairlineWidth(),
    borderColor: variables.cardBorderColor
  }
}
