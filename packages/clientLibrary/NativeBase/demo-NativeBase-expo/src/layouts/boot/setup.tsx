import * as React from 'react'
import { StyleProvider } from '@app/native-base'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getThemeStyle } from '@app/native-base'

import { IThemeVariables, generatorForAppThemeVariables } from '@app/native-base' // variables

export const platformVariables: IThemeVariables = generatorForAppThemeVariables()

export class Setup extends React.Component {
  render() {
    return (
      <StyleProvider style={getThemeStyle(platformVariables)}>{this.props.children}</StyleProvider>
    )
  }
}
