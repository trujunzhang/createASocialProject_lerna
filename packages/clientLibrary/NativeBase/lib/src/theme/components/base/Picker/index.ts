import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const pickerTheme = (variables: IThemeVariables) => {
  const pickerTheme = {
    '.note': {
      color: '#8F8E95'
    },
    // width: 90,
    marginRight: -4,
    flexGrow: 1
  }

  return pickerTheme
}