import { PixelRatio } from 'react-primitives'

import { IOtherVariables } from '../../../../types'
import { material, deviceWidth, deviceHeight } from '../../utils'

export const otherVariables: IOtherVariables = {
  // Other
  borderRadiusBase: material === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  inputGroupRoundedBorderRadius: 30
}
