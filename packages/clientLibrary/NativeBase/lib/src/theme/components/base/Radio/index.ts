import { Platform } from 'react-primitives'
import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const radioTheme = (variables: IThemeVariables) => {
  const radioTheme = {
    '.selected': {
      'NativeBase.IconNB': {
        color: Platform.OS === 'ios' ? variables.radioColor : variables.radioSelectedColorAndroid,
        lineHeight: Platform.OS === 'ios' ? 25 : variables.radioBtnLineHeight,
        height: Platform.OS === 'ios' ? 20 : undefined
      }
    },
    'NativeBase.IconNB': {
      color: Platform.OS === 'ios' ? 'transparent' : undefined,
      lineHeight: Platform.OS === 'ios' ? undefined : variables.radioBtnLineHeight,
      fontSize: Platform.OS === 'ios' ? undefined : variables.radioBtnSize
    }
  }

  return radioTheme
}
