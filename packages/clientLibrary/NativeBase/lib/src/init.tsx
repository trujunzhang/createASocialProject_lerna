import { Theme } from 'native-base-shoutem-theme'
import { getThemeStyle } from './theme'

import { platformVariables as variables } from '@appVariables/theme/variables/platform' // variables // [variables]

const setDefaultThemeStyle = () => {
  const theme = getThemeStyle(variables)
  Theme.setDefaultThemeStyle(theme)
}

export default setDefaultThemeStyle
