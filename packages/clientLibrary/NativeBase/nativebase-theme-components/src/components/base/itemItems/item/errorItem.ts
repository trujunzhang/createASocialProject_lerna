import { themeVariables } from '@app/native-base-variables'

export function getErrorItem(variables) {
  return {
    'NativeBase.Icon': {
      color: variables.inputErrorBorderColor
    },
    'NativeBase.IconNB': {
      color: variables.inputErrorBorderColor
    },
    '.rounded': {
      borderRadius: 30,
      borderColor: variables.inputErrorBorderColor
    },
    '.regular': {
      borderColor: variables.inputErrorBorderColor
    },
    '.underline': {
      borderWidth: variables.borderWidth * 2,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: variables.inputErrorBorderColor
    },
    borderColor: variables.inputErrorBorderColor
  }
}
