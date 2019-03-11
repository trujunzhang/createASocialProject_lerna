import { ITabVariables } from '../../../../types'

import { material } from '../../utils'
export const tabVariables: ITabVariables = {
  // Tab
  tabDefaultBg: material === 'ios' ? '#F8F8F8' : '#3F51B5',
  topTabBarTextColor: material === 'ios' ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: material === 'ios' ? '#007aff' : '#fff',
  topTabBarBorderColor: material === 'ios' ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: material === 'ios' ? '#007aff' : '#fff'
}
