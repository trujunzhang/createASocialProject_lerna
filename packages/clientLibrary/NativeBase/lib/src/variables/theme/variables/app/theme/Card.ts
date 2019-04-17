import { platform } from '../../utils'
import { ICardVariables } from '@app/tools' // typings
export const cardVariables: ICardVariables = {
  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: platform === 'ios' ? 10 : 12
}
