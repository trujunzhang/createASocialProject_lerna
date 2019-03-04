import { themeVariables } from '@app/native-base-variables'

export function getInlineLabelItem(variables) {
  return {
    'NativeBase.Label': {
      position: null,
      top: null,
      left: null,
      right: null,
      paddingRight: 20,
      height: null,
      width: null,
      fontSize: variables.inputFontSize
    },
    'NativeBase.Input': {
      paddingLeft: 5,
      fontSize: variables.inputFontSize
    },
    flexDirection: 'row'
  }
}
