import { platform } from '../../utils'
import { IIconVariables } from '@app/tools' // typings
import { appThemeDefaultVariables } from '../appVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: appThemeDefaultVariables.iconFamily,
  iconFontSize: platform === 'ios' ? 28 : 28,
  iconHeaderSize: 24
}
