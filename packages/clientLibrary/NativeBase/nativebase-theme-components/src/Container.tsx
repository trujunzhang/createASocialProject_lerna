import { themeVariables } from '@app/native-base-variables'
export const containerTheme = (variables: themeVariables) => {
  const platform = variables.platform
  const themePlatformFunc = variables.themePlatformFunc
  const deviceHeight = themePlatformFunc.getCurrentDeviceHeight()

  const theme = {
    flex: 1,
    height: platform === 'ios' ? deviceHeight : deviceHeight - 20,
    backgroundColor: variables.containerBgColor
  }

  return theme
}
