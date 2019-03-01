import { vectorIcons } from './vectorIcons'

import { themeVariablesWithIconVector, generatorForAppThemeVariables } from '@app/native-base-variables'

export const platformVariables: themeVariablesWithIconVector = generatorForAppThemeVariables(
  {
    iconRenderComponents: () => {
      return vectorIcons
    }
  }
)
