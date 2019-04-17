import { platform } from '../../utils'
import { IIconVariables } from '@app/tools' // typings
import { commonColorThemeDefaultVariables } from '../commonColorVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconHeaderSize: platform === 'ios' ? 33 : 24
}