import * as React from 'react'
import { StyleProvider } from '@app/native-base'

import { getThemeStyle } from '@app/nativebase-theme-components'
import { platformVariables as variables } from '../theme/variables/platform'

export class Setup extends React.Component {
  render() {
    return <StyleProvider style={getThemeStyle(variables)}>{this.props.children}</StyleProvider>
  }
}
