import { platform } from '../../utils'
import { IIconVariables } from '../../../../types'

import { appThemeDefaultVariables } from '../appVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: appThemeDefaultVariables.iconFamily,
  iconFontSize: platform === 'ios' ? 28 : 28,
  iconHeaderSize: 24
}
