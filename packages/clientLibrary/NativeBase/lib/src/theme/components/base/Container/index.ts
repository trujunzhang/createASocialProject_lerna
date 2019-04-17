import { Platform, Dimensions } from 'react-primitives'
import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

const deviceHeight = Dimensions.get('window').height
export const containerTheme = (variables: IThemeVariables) => {
  const theme = {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
    backgroundColor: variables.containerBgColor
  }

  return theme
}
