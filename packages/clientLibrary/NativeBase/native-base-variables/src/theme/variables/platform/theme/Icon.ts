import { platform } from '../../utils'
import { IIconVariables } from '../../../../types'

import { platformThemeDefaultVariables } from '../platformVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: platformThemeDefaultVariables.iconFamily,
  iconFontSize: platform === 'ios' ? 28 : 28,
  iconHeaderSize: 24
}
