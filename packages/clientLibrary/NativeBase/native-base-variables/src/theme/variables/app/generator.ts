import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables
} from '../../../types'

import { appThemeDefaultVariables } from './appVariables'
import { appThemeVariables } from './appThemeVariables'

export const generatorForAppThemeVariables = (
  iconVectorVariable: IIconVectorVariables,
  themeDefaultVariables?: IThemeDefaultVariables
): themeVariablesWithIconVector => {
  const nextAppThemeVariables = appThemeVariables
  const variableWithIcons = {
    ...nextAppThemeVariables,
    ...iconVectorVariable
  }

  const defaultVariables = themeDefaultVariables || appThemeDefaultVariables
  return {
    ...variableWithIcons,
    ...defaultVariables
  }
}
