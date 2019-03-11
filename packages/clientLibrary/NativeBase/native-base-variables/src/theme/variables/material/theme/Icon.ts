import { platform } from '../../utils'
import { IIconVariables } from '../../../../types'

import { materialThemeDefaultVariables } from '../materialVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: materialThemeDefaultVariables.iconFamily,
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconHeaderSize: platform === 'ios' ? 33 : 24
}
