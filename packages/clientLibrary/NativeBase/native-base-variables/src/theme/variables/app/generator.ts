import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables,
  IKeyboardAwareScrollViewVariables
} from '../../../types'

import { appThemeDefaultVariables } from './appVariables'
import { appThemeVariables } from './appThemeVariables'

export const generatorForAppThemeVariables = (
  iconVectorVariable: IIconVectorVariables,
  keyboardAwareScrollViewVariables: IKeyboardAwareScrollViewVariables,
  themeDefaultVariables?: IThemeDefaultVariables
): themeVariablesWithIconVector => {
  const nextAppThemeVariables = appThemeVariables
  const variableWithIcons = {
    ...nextAppThemeVariables,
    ...iconVectorVariable
  }

  const defaultVariables = themeDefaultVariables || appThemeDefaultVariables
  const variables = {
    ...variableWithIcons,
    ...keyboardAwareScrollViewVariables,
    ...defaultVariables
  }

  // const KeyboardAwareScrollView: any = variables.getKeyboardAwareScrollView()

  return variables
}
