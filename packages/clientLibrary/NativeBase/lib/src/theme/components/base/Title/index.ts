import { Platform } from 'react-primitives'

import { IThemeVariables } from '@app/tools' // typings

// import * as Props from './props'
// import * as Base from './base'

export const titleTheme = (variables: IThemeVariables) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: Platform.OS === 'ios' ? '700' : undefined,
    textAlign: 'center',
    paddingLeft: Platform.OS === 'ios' ? 4 : 0,
    marginLeft: Platform.OS === 'ios' ? undefined : -3,
    paddingTop: 1
  }

  return titleTheme
}
