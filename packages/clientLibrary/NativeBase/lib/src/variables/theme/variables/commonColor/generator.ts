import { IThemeVariables } from '@app/tools' // typings
import { IThemeDefaultVariables } from '@app/tools' // typings

import { commonColorThemeDefaultVariables } from './commonColorVariables'
import { commonColorThemeVariables } from './commonColorThemeVariables'

export const generatorForCommonColorThemeVariables = (
  themeDefaultVariables?: IThemeDefaultVariables
): IThemeVariables => {
  const nextAppThemeVariables = commonColorThemeVariables
  const variableWithIcons = nextAppThemeVariables

  const defaultVariables = themeDefaultVariables || commonColorThemeDefaultVariables
  return {
    ...variableWithIcons,
    ...defaultVariables
  }
}
