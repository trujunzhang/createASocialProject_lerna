import { platform } from '../../utils'
import { IIconVariables } from '../../../../types'

import { iconDefaultFamily } from './appVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: iconDefaultFamily,
  iconFontSize: platform === 'ios' ? 28 : 28,
  iconHeaderSize: 24
}
