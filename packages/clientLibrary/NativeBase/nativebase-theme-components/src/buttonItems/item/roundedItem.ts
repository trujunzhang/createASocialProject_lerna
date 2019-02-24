import { themeVariables } from '@app/native-base-variables'

export function getRoundedItem(params, variables: themeVariables, platform, platformStyle) {
  return {
    // paddingHorizontal: variables.buttonPadding + 20,
    borderRadius: variables.borderRadiusLarge()
  }
}
