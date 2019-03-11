import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables
} from '../../../types'

import { commonColorThemeDefaultVariables } from './commonColorVariables'
import { commonColorThemeVariables } from './commonColorThemeVariables'

export const generatorForCommonColorThemeVariables = (
  iconVectorVariable: IIconVectorVariables,
  themeDefaultVariables?: IThemeDefaultVariables
): themeVariablesWithIconVector => {
  const nextAppThemeVariables = commonColorThemeVariables
  const variableWithIcons = {
    ...nextAppThemeVariables,
    ...iconVectorVariable
  }

  const defaultVariables = themeDefaultVariables || commonColorThemeDefaultVariables
  return {
    ...variableWithIcons,
    ...defaultVariables
  }
}
