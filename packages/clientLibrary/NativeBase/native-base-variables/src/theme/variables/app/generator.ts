import { IThemeDefaultVariables, themeVariablesWithIconVector, IIconVectorVariables } from '../../../types'

import {
  appThemeVariables
} from './appThemeVariables'

export const generatorForAppThemeVariables = (
  iconVectorVariable: IIconVectorVariables
): themeVariablesWithIconVector => {
  const nextAppThemeVariables = appThemeVariables
  return Object.assign(nextAppThemeVariables, iconVectorVariable)
}
