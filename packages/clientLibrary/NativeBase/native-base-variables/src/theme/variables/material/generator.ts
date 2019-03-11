import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables
} from '../../../types'

import { materialThemeDefaultVariables } from './materialVariables'
import { materialThemeVariables } from './materialThemeVariables'

export const generatorForMaterialThemeVariables = (
  iconVectorVariable: IIconVectorVariables,
  themeDefaultVariables?: IThemeDefaultVariables
): themeVariablesWithIconVector => {
  const nextAppThemeVariables = materialThemeVariables
  const variableWithIcons = {
    ...nextAppThemeVariables,
    ...iconVectorVariable
  }

  const defaultVariables = themeDefaultVariables || materialThemeDefaultVariables
  return {
    ...variableWithIcons,
    ...defaultVariables
  }
}
