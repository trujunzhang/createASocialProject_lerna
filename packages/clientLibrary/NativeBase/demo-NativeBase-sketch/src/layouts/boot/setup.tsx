import * as React from 'react'
import { StyleProvider } from '@app/native-base'

import { getThemeStyle } from '@app/nativebase-theme-components'
import { vectorIcons } from './vectorIcons'

import {
  IIconVectorVariables, IThemeDefaultVariables,
  themeVariablesWithIconVector,
  generatorForAppThemeVariables,
  fontProxima,
  fontRoboto
} from '@app/native-base-variables'


const iconVectorVariable: IIconVectorVariables = {
  iconRenderComponents: () => {
    return vectorIcons
  }
}

const themeDefaultVariables: IThemeDefaultVariables = {
  iconFamily: 'MaterialIcons',
  btnFontFamily: fontRoboto,
  fontFamily: fontRoboto,
  titleFontfamily: fontRoboto
}

export const platformVariables: themeVariablesWithIconVector = generatorForAppThemeVariables(
  iconVectorVariable,
  themeDefaultVariables
)

const appStyles = getThemeStyle(platformVariables)

export class Setup extends React.Component {
  render() {
    // return null
    return (
      <StyleProvider style={appStyles}>{this.props.children}</StyleProvider>
    )
  }
}
