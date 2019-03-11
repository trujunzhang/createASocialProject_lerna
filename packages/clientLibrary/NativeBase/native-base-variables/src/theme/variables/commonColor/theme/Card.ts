import { commonColor } from '../../utils'
import { ICardVariables } from '../../../../types'

export const cardVariables: ICardVariables = {
  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: commonColor === 'ios' ? 10 : 12
}
