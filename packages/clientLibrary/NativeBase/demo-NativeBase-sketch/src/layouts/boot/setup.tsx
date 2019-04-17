import * as React from 'react'
import { StyleProvider } from '@app/native-base'
import { View } from 'react-primitives'

import { getThemeStyle } from '@app/native-base'
import { vectorIcons } from './vectorIcons'

import {
  IThemeDefaultVariables,
  IThemeVariables,
  generatorForAppThemeVariables,
  generatorForMaterialThemeVariables,
  ProximaFontFamily,
  RobotoFontFamily,
  AppVectorIcons
} from '@app/native-base' // variables

const currentFontFamily = ProximaFontFamily
// const currentFontFamily = RobotoFontFamily

const themeDefaultVariables: IThemeDefaultVariables = {
  iconFamily: AppVectorIcons.platformOS,
  // iconFamily: 'MaterialIcons',
  fontFamily: currentFontFamily.family,
  btnFontFamily: currentFontFamily.fontFace.medium,
  titleFontfamily: currentFontFamily.fontFace.medium
}

export const sketchAppVariables: IThemeVariables = generatorForMaterialThemeVariables()

const appStyles = getThemeStyle(sketchAppVariables)

export class Setup extends React.Component {
  render() {
    // return null
    return <StyleProvider style={appStyles}>{this.props.children}</StyleProvider>
  }
}
