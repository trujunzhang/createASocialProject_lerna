import { ITitleVariables } from '../../../../types'

import { platform } from '../../utils'
import { commonColorThemeDefaultVariables } from '../commonColorVariables'

export const titleVariables: ITitleVariables = {
  // Title
  titleFontfamily: commonColorThemeDefaultVariables.titleFontfamily,
  // titleFontfamily: platform === 'ios' ? 'System' : 'Roboto_medium',

  titleFontSize: platform === 'ios' ? 17 : 19,
  subTitleFontSize: platform === 'ios' ? 11 : 14,
  subtitleColor: platform === 'ios' ? '#000' : '#fff',
  titleFontColor: platform === 'ios' ? '#000' : '#fff'
}
