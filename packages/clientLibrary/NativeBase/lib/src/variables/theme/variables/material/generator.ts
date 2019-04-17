import { IThemeVariables } from '@app/tools' // typings
import { IThemeDefaultVariables } from '@app/tools' // typings

import { materialThemeDefaultVariables } from './materialVariables'
import { materialThemeVariables } from './materialThemeVariables'

export const generatorForMaterialThemeVariables = (
  themeDefaultVariables?: IThemeDefaultVariables
): IThemeVariables => {
  const nextAppThemeVariables = materialThemeVariables
  const variableWithIcons = nextAppThemeVariables

  const defaultVariables = themeDefaultVariables || materialThemeDefaultVariables
  return {
    ...variableWithIcons,
    ...defaultVariables
  }
}
