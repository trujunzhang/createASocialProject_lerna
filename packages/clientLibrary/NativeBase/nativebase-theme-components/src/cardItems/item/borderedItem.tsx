import { themeVariables } from '@app/native-base-variables'
import { StyleSheet } from 'react-primitives'

export function getBorderedItem(variables: themeVariables, platform) {
  return {
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: variables.cardBorderColor
  }
}
