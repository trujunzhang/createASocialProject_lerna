import { themeVariables } from '@app/native-base-variables'

export function getInputBase(variables: themeVariables) {
  const platform = variables.platform
  return {
    '.multiline': {
      height: null
    },
    height: variables.inputHeightBase,
    color: variables.inputColor(),
    flex: 1,
    top: platform === 'ios' ? 1.5 : undefined,
    fontSize: variables.inputFontSize
  }
}
