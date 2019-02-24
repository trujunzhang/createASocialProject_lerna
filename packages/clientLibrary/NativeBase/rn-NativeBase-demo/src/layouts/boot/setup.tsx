import * as React from 'react'
import { View, Text, PixelRatio, Dimensions, StyleSheet } from 'react-native'
import { StyleProvider } from '@app/native-base'
import { Color } from '@app/color'

import { getTheme } from '@app/nativebase-theme-components'
// import { getPlatformVariables } from '@app/mocks'
import { getPlatformVariables } from '../variables/platform'

export class Setup extends React.Component {
  render() {
    const variables = getPlatformVariables({
      getPixelSizeForLayoutSize: (layoutSize: number) => {
        PixelRatio.getPixelSizeForLayoutSize(layoutSize)
      },
      getCurrentDeviceHeight: () => {
        return Dimensions.get('window').height
      },
      getStyleHairlineWidth: () => {
        return StyleSheet.hairlineWidth
      }
    })
    const s1 = getTheme(variables)
    const v1 = Color('red')
      .darken(0.2)
      .toString()
    return <StyleProvider style={getTheme(variables)}>{this.props.children}</StyleProvider>
  }
}
