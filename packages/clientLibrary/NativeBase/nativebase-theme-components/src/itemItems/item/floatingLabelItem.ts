import { themeVariables } from '@app/native-base-variables'

export function getFloatingLabelItem(variables: themeVariables) {
  const platform = variables.platform
  return {
    'NativeBase.Input': {
      height: 50,
      top: 8,
      paddingTop: 3,
      paddingBottom: 7,
      '.multiline': {
        minHeight: variables.inputHeightBase,
        paddingTop: platform === 'ios' ? 10 : 3,
        paddingBottom: platform === 'ios' ? 14 : 10
      }
    },
    'NativeBase.Label': {
      paddingTop: 5
    },
    'NativeBase.Icon': {
      top: 6,
      paddingTop: 8
    },
    'NativeBase.IconNB': {
      top: 6,
      paddingTop: 8
    }
  }
}
