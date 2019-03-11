import { commonColor } from '../../utils'
import { IIconVariables } from '../../../../types'

import { commonColorThemeDefaultVariables } from '../commonColorVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: commonColorThemeDefaultVariables.iconFamily,
  iconFontSize: commonColor === 'ios' ? 30 : 28,
  iconHeaderSize: commonColor === 'ios' ? 33 : 24
}
