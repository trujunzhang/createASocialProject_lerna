import { platform } from '../../utils'
import { ICardVariables } from '../../../../types'

export const cardVariables: ICardVariables = {
  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: platform === 'ios' ? 10 : 12
}
