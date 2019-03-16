import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables,
  IKeyboardAwareScrollViewVariables
} from '../../../types'

import { materialThemeDefaultVariables } from './materialVariables'
import { materialThemeVariables } from './materialThemeVariables'

export const generatorForMaterialThemeVariables = (
  iconVectorVariable: IIconVectorVariables,
  keyboardAwareScrollViewVariables: IKeyboardAwareScrollViewVariables,
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
    ...keyboardAwareScrollViewVariables,
    ...defaultVariables
  }
}
