import { themeVariables } from '@app/native-base-variables'

export function getUnderLineItem(variables) {
  return {
    'NativeBase.Input': {
      paddingLeft: 15
    },
    '.success': {
      borderColor: variables.inputSuccessBorderColor
    },
    '.error': {
      borderColor: variables.inputErrorBorderColor
    },
    borderWidth: variables.borderWidth * 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: variables.inputBorderColor
  }
}
