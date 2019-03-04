import { themeVariables } from '@app/native-base-variables'

export function getIconBase(variables: themeVariables, platform, platformStyle) {
  return {
    color: variables.inverseTextColor,
    fontSize: 24,
    marginHorizontal: 16,
    paddingTop: platform === 'ios' ? 2 : undefined
  }
}
