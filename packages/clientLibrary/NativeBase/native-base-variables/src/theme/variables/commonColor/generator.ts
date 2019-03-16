import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables,
  IKeyboardAwareScrollViewVariables
} from '../../../types'

import { commonColorThemeDefaultVariables } from './commonColorVariables'
import { commonColorThemeVariables } from './commonColorThemeVariables'

export const generatorForCommonColorThemeVariables = (
  iconVectorVariable: IIconVectorVariables,
  keyboardAwareScrollViewVariables: IKeyboardAwareScrollViewVariables,
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
    ...keyboardAwareScrollViewVariables,
    ...defaultVariables
  }
}
