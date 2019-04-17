import { platform } from '../../utils'
import { IIconVariables } from '@app/tools' // typings
import { platformThemeDefaultVariables } from '../platformVariables'
export const iconVariables: IIconVariables = {
  // Icon
  iconFamily: platformThemeDefaultVariables.iconFamily,
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconHeaderSize: platform === 'ios' ? 33 : 24
}
