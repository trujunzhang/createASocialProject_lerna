import { themeVariables } from '@app/native-base-variables'

export function getSuccessItem(variables) {
  return {
    'NativeBase.Icon': {
      color: variables.inputSuccessBorderColor
    },
    'NativeBase.IconNB': {
      color: variables.inputSuccessBorderColor
    },
    '.rounded': {
      borderRadius: 30,
      borderColor: variables.inputSuccessBorderColor
    },
    '.regular': {
      borderColor: variables.inputSuccessBorderColor
    },
    '.underline': {
      borderWidth: variables.borderWidth * 2,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: variables.inputSuccessBorderColor
    },
    borderColor: variables.inputSuccessBorderColor
  }
}
