import { Platform, Dimensions, PixelRatio } from 'react-primitives'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS

export function checkIsIphoneX() {
  const isIphoneX =
    platform === 'ios' &&
    (deviceHeight === 812 || deviceWidth === 812 || deviceHeight === 896 || deviceWidth === 896)

  return isIphoneX
}
