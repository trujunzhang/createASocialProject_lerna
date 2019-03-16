import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables,
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
  const variables = {
    ...variableWithIcons,
    ...defaultVariables
  }

  // const KeyboardAwareScrollView: any = variables.getKeyboardAwareScrollView()

  return variables
}
