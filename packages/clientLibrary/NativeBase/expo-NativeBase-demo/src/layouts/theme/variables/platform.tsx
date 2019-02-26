import { vectorIcons } from './vectorIcons'

import { themeVariables, appThemeVariables } from '@app/native-base-variables'

export const platformVariables: themeVariables = {
  ...appThemeVariables,
  iconRenderComponents: () => {
    return vectorIcons
  }
}
