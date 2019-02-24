import { themeVariables } from '@app/native-base-variables'

export function getLastItem(variables: themeVariables, platform) {
  return {
    borderBottomLeftRadius: variables.cardBorderRadius,
    borderBottomRightRadius: variables.cardBorderRadius
  }
}
