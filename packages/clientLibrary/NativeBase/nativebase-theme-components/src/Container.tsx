import { themeVariables } from '@app/native-base-variables'

import { Dimensions } from 'react-primitives'

export const containerTheme = (variables: themeVariables) => {
  const platform = variables.platform
  const deviceHeight = Dimensions.get('window').height

  const theme = {
    flex: 1,
    height: platform === 'ios' ? deviceHeight : deviceHeight - 20,
    backgroundColor: variables.containerBgColor
  }

  return theme
}
