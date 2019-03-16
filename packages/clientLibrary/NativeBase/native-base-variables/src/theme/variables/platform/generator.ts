import {
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  IIconVectorVariables,
  IKeyboardAwareScrollViewVariables
} from '../../../types'

import { platformThemeDefaultVariables } from './platformVariables'
import { platformThemeVariables } from './platformThemeVariables'

export const generatorForPlatformThemeVariables = (
  iconVectorVariable: IIconVectorVariables,
  keyboardAwareScrollViewVariables: IKeyboardAwareScrollViewVariables,
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
    ...keyboardAwareScrollViewVariables,
    ...defaultVariables
  }
}
