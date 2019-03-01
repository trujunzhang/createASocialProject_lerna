import { vectorIcons } from './vectorIcons'

import { themeVariablesWithIconVector, appThemeVariables } from '@app/native-base-variables'

export const platformVariables: themeVariablesWithIconVector = {
  ...appThemeVariables,
  iconRenderComponents: () => {
    return vectorIcons
  }
}
