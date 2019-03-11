import * as React from 'react'
import { StyleProvider } from '@app/native-base'

import { getThemeStyle } from '@app/nativebase-theme-components'
import { vectorIcons } from './vectorIcons'

import {
  IIconVectorVariables,
  IThemeDefaultVariables,
  themeVariablesWithIconVector,
  generatorThemeVariablesForDemo,
  ProximaFontFamily,
  RobotoFontFamily
} from '@app/native-base-variables'

const currentFontFamily = ProximaFontFamily
// const currentFontFamily = RobotoFontFamily

const iconVectorVariable: IIconVectorVariables = {
  iconRenderComponents: () => {
    return vectorIcons
  }
}

const themeDefaultVariables: IThemeDefaultVariables = {
  iconFamily: 'MaterialIcons',
  fontFamily: currentFontFamily.family,
  btnFontFamily: currentFontFamily.fontFace.medium,
  titleFontfamily: currentFontFamily.fontFace.medium
}

export const platformVariables: themeVariablesWithIconVector = generatorThemeVariablesForDemo(
  iconVectorVariable,
  themeDefaultVariables
)

const appStyles = getThemeStyle(platformVariables)

export class Setup extends React.Component {
  render() {
    // return null
    return <StyleProvider style={appStyles}>{this.props.children}</StyleProvider>
  }
}
