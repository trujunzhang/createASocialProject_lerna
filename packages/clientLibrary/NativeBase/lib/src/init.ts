import { Theme } from '@app/native-base-shoutem-theme'
import { getThemeStyle } from '@app/nativebase-theme-components'
import { platformVariables as variables } from '@app/native-base-variables'

export function setDefaultThemeStyle() {
  const theme = getThemeStyle(variables)
  Theme.setDefaultThemeStyle(theme)
}
