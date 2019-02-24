import { themeVariables } from '@app/native-base-variables'

export function getLabelBase(variables) {
  return {
    fontSize: variables.inputFontSize,
    color: variables.inputColorPlaceholder(),
    paddingRight: 5
  }
}
