import { IBadgeVariables } from '../../../../types'
import { material } from '../../utils'

export const badgeVariables: IBadgeVariables = {
  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: material === 'ios' ? 3 : 0
}
