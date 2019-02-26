import { PixelRatio } from 'react-native'

import { IOtherVariables } from '../../../../types'
import { platform, deviceWidth, deviceHeight, isIphoneX } from '../../utils'

export const otherVariables: IOtherVariables = {
  // Other
  borderRadiusBase: platform === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30
}
