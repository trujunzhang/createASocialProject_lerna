import * as React from 'react'
import { StyleProvider } from '@app/native-base'
import { Color } from '@app/color'

import { getTheme } from '@app/nativebase-theme-components'
import { getPlatformVariables } from '../variables/platform'

export class Setup extends React.Component {
  render() {
    const variables = getPlatformVariables()
    const s1 = getTheme(variables)
    const v1 = Color('red')
      .darken(0.2)
      .toString()
    return <StyleProvider style={getTheme(variables)}>{this.props.children}</StyleProvider>
  }
}
