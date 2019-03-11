import { IBadgeVariables } from '../../../../types'
import { commonColor } from '../../utils'

export const badgeVariables: IBadgeVariables = {
  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: commonColor === 'ios' ? 3 : 0
}
