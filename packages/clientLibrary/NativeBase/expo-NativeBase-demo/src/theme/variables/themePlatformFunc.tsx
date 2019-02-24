import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native'
import { themeVariables, ThemePlatformFunc } from '@app/native-base-variables'

export const themePlatformFunc: ThemePlatformFunc = {
  getPixelSizeForLayoutSize: (layoutSize: number) => {
    return PixelRatio.getPixelSizeForLayoutSize(layoutSize)
  },
  getCurrentDeviceHeight: () => {
    return Dimensions.get('window').height
  },
  getStyleHairlineWidth: () => {
    return StyleSheet.hairlineWidth
  }
}
