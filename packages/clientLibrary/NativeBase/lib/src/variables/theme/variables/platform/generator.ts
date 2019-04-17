import { IThemeVariables } from '@app/tools' // typings
import { IThemeDefaultVariables } from '@app/tools' // typings

import { platformThemeDefaultVariables } from './platformVariables'
import { platformThemeVariables } from './platformThemeVariables'

export const generatorForPlatformThemeVariables = (
  themeDefaultVariables?: IThemeDefaultVariables
): IThemeVariables => {
  const nextAppThemeVariables = platformThemeVariables
  const variableWithIcons = nextAppThemeVariables

  const defaultVariables = themeDefaultVariables || platformThemeDefaultVariables
  return {
    ...variableWithIcons,
    ...defaultVariables
  }
}
