import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables,
} from '../../../types'

import { platformThemeDefaultVariables } from './platformVariables'
import { platformThemeVariables } from './platformThemeVariables'

export const generatorForPlatformThemeVariables = (
  iconVectorVariable: IIconVectorVariables,
  themeDefaultVariables?: IThemeDefaultVariables
): themeVariablesWithIconVector => {
  const nextAppThemeVariables = platformThemeVariables
  const variableWithIcons = {
    ...nextAppThemeVariables,
    ...iconVectorVariable
  }

  const defaultVariables = themeDefaultVariables || platformThemeDefaultVariables
  return {
    ...variableWithIcons,
    ...defaultVariables
  }
}
