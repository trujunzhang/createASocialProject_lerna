import { ITitleVariables } from '../../../../types'

import { commonColor } from '../../utils'
import { commonColorThemeDefaultVariables } from '../commonColorVariables'

export const titleVariables: ITitleVariables = {
  // Title
  titleFontfamily: commonColorThemeDefaultVariables.titleFontfamily,
  // titleFontfamily: commonColor === 'ios' ? 'System' : 'Roboto_medium',
  titleFontSize: commonColor === 'ios' ? 17 : 19,
  subTitleFontSize: commonColor === 'ios' ? 11 : 14,
  subtitleColor: commonColor === 'ios' ? '#8e8e93' : '#FFF',
  titleFontColor: commonColor === 'ios' ? '#000' : '#FFF'
}
