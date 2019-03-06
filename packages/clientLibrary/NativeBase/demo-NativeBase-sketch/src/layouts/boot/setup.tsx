import * as React from 'react'
import { StyleProvider } from '@app/native-base'

import { getThemeStyle } from '@app/nativebase-theme-components'

import {
    IIconVectorVariables,IThemeDefaultVariables,
  themeVariablesWithIconVector,
    generatorForAppThemeVariables,
    fontProxima 
} from '@app/native-base-variables'


const iconVectorVariable: IIconVectorVariables =  {
    iconRenderComponents: () => {
        return null
    }
}
const themeDefaultVariables: IThemeDefaultVariables = {
    btnFontFamily: 'MaterialIcons',
    iconFamily: 'MaterialIcons',
    fontFamily: fontProxima ,
    titleFontfamily: fontProxima 
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
