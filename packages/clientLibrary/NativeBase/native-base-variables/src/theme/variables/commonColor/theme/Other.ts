import { PixelRatio } from 'react-primitives'

import { IOtherVariables } from '../../../../types'
import { commonColor, deviceWidth, deviceHeight } from '../../utils'

export const otherVariables: IOtherVariables = {
  // Other
  borderRadiusBase: commonColor === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  inputGroupRoundedBorderRadius: 30
}
