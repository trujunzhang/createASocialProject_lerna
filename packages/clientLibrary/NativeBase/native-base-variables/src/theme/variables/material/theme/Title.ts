import { ITitleVariables } from '../../../../types'

import { platform } from '../../utils'
import { materialThemeDefaultVariables } from '../materialVariables'

export const titleVariables: ITitleVariables = {
  // Title
  titleFontfamily: materialThemeDefaultVariables.titleFontfamily,
  // titleFontfamily: platform === 'ios' ? 'System' : 'Roboto_medium',
  titleFontSize: platform === 'ios' ? 17 : 19,
  subTitleFontSize: platform === 'ios' ? 11 : 14,
  subtitleColor: platform === 'ios' ? '#8e8e93' : '#FFF',
  titleFontColor: platform === 'ios' ? '#000' : '#FFF'
}
