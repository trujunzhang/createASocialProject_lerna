import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables
} from '../../../types'

import { themeDefaultVariables } from './appVariables'
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

  const defaultVariables = themeDefaultVariables || themeDefaultVariables
  return {
    ...variableWithIcons,
    ...defaultVariables
  }
}
