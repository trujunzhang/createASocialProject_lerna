import { themeVariables } from '@app/native-base-variables'
export const titleTheme = (variables: themeVariables) => {
  const platform = variables.platform
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: platform === 'ios' ? '700' : undefined,
    textAlign: 'center',
    paddingLeft: platform === 'ios' ? 4 : 0,
    marginLeft: platform === 'ios' ? undefined : -3,
    paddingTop: 1
  }

  return titleTheme
}
