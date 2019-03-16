import * as React from 'react'
import { StyleProvider } from '@app/native-base'

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getThemeStyle } from '@app/nativebase-theme-components'
import { vectorIcons } from './vectorIcons'

import {
  IIconVectorVariables,
  themeVariablesWithIconVector,
  generatorThemeVariablesForDemo
} from '@app/native-base-variables'

const iconVectorVariable: IIconVectorVariables = {
  iconRenderComponents: () => {
    return vectorIcons
  }
}

export const platformVariables: themeVariablesWithIconVector = generatorThemeVariablesForDemo(
  iconVectorVariable,
)

export class Setup extends React.Component {
  render() {
    return (
      <StyleProvider style={getThemeStyle(platformVariables)}>{this.props.children}</StyleProvider>
    )
  }
}
