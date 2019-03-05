import { platform } from '../../utils'
import { IIconVariables } from '../../../../types'

import { themeDefaultVariables } from '../appVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: themeDefaultVariables.iconFamily,
  iconFontSize: platform === 'ios' ? 28 : 28,
  iconHeaderSize: 24
}
