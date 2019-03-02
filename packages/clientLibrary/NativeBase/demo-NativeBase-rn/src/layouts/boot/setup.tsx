import * as React from 'react'
import { StyleProvider } from '@app/native-base'

import { getTheme } from '@app/nativebase-theme-components'
import { getPlatformVariables } from '../variables/platform'

export class Setup extends React.Component {
  render() {
    const variables = getPlatformVariables()
    const s1 = getTheme(variables)
    return <StyleProvider style={getTheme(variables)}>{this.props.children}</StyleProvider>
  }
}
