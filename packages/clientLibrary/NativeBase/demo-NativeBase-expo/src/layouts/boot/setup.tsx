import * as React from 'react'
import { StyleProvider } from '@app/native-base'

import { getThemeStyle } from '@app/nativebase-theme-components'
import { vectorIcons } from './vectorIcons'

import {
  themeVariablesWithIconVector,
  generatorForAppThemeVariables
} from '@app/native-base-variables'

export const platformVariables: themeVariablesWithIconVector = generatorForAppThemeVariables({
  iconRenderComponents: () => {
    return vectorIcons
    // return null
  }
})

export class Setup extends React.Component {
  render() {
    return (
      <StyleProvider style={getThemeStyle(platformVariables)}>{this.props.children}</StyleProvider>
    )
  }
}
