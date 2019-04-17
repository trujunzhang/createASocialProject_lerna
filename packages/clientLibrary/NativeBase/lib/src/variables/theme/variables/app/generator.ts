import { IThemeVariables } from '@app/tools' // typings
import { IThemeDefaultVariables } from '@app/tools' // typings

import { appThemeDefaultVariables } from './appVariables'
import { appThemeVariables } from './appThemeVariables'

export const generatorForAppThemeVariables = (
  themeDefaultVariables?: IThemeDefaultVariables
): IThemeVariables => {
  const nextAppThemeVariables = appThemeVariables
  const variableWithIcons = nextAppThemeVariables

  const defaultVariables = themeDefaultVariables || appThemeDefaultVariables
  const variables = {
    ...variableWithIcons,
    ...defaultVariables
  }

  return variables
}
