import { IBadgeVariables } from '@app/tools' // typings

import { platform } from '../../utils'

export const badgeVariables: IBadgeVariables = {
  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: platform === 'ios' ? 3 : 0
}
