import { Platform, Dimensions, PixelRatio } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS

// export function checkIsIphoneX() {
//   const is__IphoneX =
//     platform === 'ios' &&
//     (deviceHeight === 812 || deviceWidth === 812 || deviceHeight === 896 || deviceWidth === 896)

//   return is__IphoneX
// }
