import { ITabVariables } from '../../../../types'

import { commonColor } from '../../utils'
export const tabVariables: ITabVariables = {
  // Tab
  tabDefaultBg: commonColor === 'ios' ? '#F8F8F8' : '#3F51B5',
  topTabBarTextColor: commonColor === 'ios' ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: commonColor === 'ios' ? '#007aff' : '#fff',
  topTabBarBorderColor: commonColor === 'ios' ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: commonColor === 'ios' ? '#007aff' : '#fff'
}
