import { themeVariables } from '@app/native-base-variables'

export function getFixedLabelItem(variables) {
  return {
    'NativeBase.Label': {
      position: null,
      top: null,
      left: null,
      right: null,
      flex: 1,
      height: null,
      width: null,
      fontSize: variables.inputFontSize
    },
    'NativeBase.Input': {
      flex: 2,
      fontSize: variables.inputFontSize
    }
  }
}
