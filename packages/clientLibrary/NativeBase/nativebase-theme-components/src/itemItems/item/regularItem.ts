import { themeVariables } from '@app/native-base-variables'

export function getRegularItem(variables) {
  return {
    'NativeBase.Input': {
      paddingLeft: 8
    },
    'NativeBase.Icon': {
      paddingLeft: 10
    },
    '.success': {
      borderColor: variables.inputSuccessBorderColor
    },
    '.error': {
      borderColor: variables.inputErrorBorderColor
    },
    borderWidth: variables.borderWidth * 2,
    borderColor: variables.inputBorderColor
  }
}
