import { themeVariables } from '@app/native-base-variables'
export const subtitleTheme = (variables: themeVariables) => {
  const platform = variables.platform
  const subtitleTheme = {
    fontSize: variables.subTitleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.subtitleColor,
    textAlign: 'center',
    paddingLeft: platform === 'ios' ? 4 : 0,
    marginLeft: platform === 'ios' ? undefined : -3
  }

  return subtitleTheme
}
