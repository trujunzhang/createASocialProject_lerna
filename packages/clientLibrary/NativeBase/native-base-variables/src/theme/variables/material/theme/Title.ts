import { ITitleVariables } from '../../../../types'

import { material } from '../../utils'
import { materialThemeDefaultVariables } from '../materialVariables'

export const titleVariables: ITitleVariables = {
  // Title
  titleFontfamily: materialThemeDefaultVariables.titleFontfamily,
  // titleFontfamily: material === 'ios' ? 'System' : 'Roboto_medium',
  titleFontSize: material === 'ios' ? 17 : 19,
  subTitleFontSize: material === 'ios' ? 11 : 14,
  subtitleColor: material === 'ios' ? '#8e8e93' : '#FFF',
  titleFontColor: material === 'ios' ? '#000' : '#FFF'
}
