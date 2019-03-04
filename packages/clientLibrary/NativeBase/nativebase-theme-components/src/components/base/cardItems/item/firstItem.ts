import { themeVariables } from '@app/native-base-variables'

export function getFirstItem(variables: themeVariables, platform) {
  return {
    borderTopLeftRadius: variables.cardBorderRadius,
    borderTopRightRadius: variables.cardBorderRadius
  }
}
