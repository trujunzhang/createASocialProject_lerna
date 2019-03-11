import { material } from '../../utils'
import { IFooterTabVariables } from '../../../../types'

export const footerTabVariables: IFooterTabVariables = {
  // FooterTab
  tabBarTextColor: material === 'ios' ? '#6b6b6b' : '#b3c7f9',
  tabBarTextSize: material === 'ios' ? 14 : 11,
  activeTab: material === 'ios' ? '#007aff' : '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: material === 'ios' ? '#007aff' : '#fff',
  tabActiveBgColor: material === 'ios' ? '#cde1f9' : '#3F51B5'
}
