import { themeVariables } from '@app/native-base-variables'

export function getStackedLabelItem(variables: themeVariables) {
  const platform = variables.platform
  return {
    'NativeBase.Label': {
      position: null,
      top: null,
      left: null,
      right: null,
      paddingTop: 5,
      alignSelf: 'flex-start',
      fontSize: variables.inputFontSize - 2
    },
    'NativeBase.Icon': {
      marginTop: 36
    },
    'NativeBase.Input': {
      alignSelf: platform === 'ios' ? 'stretch' : 'flex-start',
      flex: 1,
      width: platform === 'ios' ? null : variables.deviceWidth - 25,
      fontSize: variables.inputFontSize,
      lineHeight: variables.inputLineHeight - 6,
      '.secureTextEntry': {
        fontSize: variables.inputFontSize - 4
      },
      '.multiline': {
        paddingTop: platform === 'ios' ? 9 : undefined,
        paddingBottom: platform === 'ios' ? 9 : undefined
      }
    },
    flexDirection: null,
    minHeight: variables.inputHeightBase + 15
  }
}
