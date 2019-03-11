import { material } from '../../utils'
import { IIconVariables } from '../../../../types'

import { materialThemeDefaultVariables } from '../materialVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: materialThemeDefaultVariables.iconFamily,
  iconFontSize: material === 'ios' ? 30 : 28,
  iconHeaderSize: material === 'ios' ? 33 : 24
}
