import { commonColor } from '../../utils'
import { IFooterTabVariables } from '../../../../types'

export const footerTabVariables: IFooterTabVariables = {
  // FooterTab
  tabBarTextColor: commonColor === 'ios' ? '#6b6b6b' : '#b3c7f9',
  tabBarTextSize: commonColor === 'ios' ? 14 : 11,
  activeTab: commonColor === 'ios' ? '#007aff' : '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: commonColor === 'ios' ? '#007aff' : '#fff',
  tabActiveBgColor: commonColor === 'ios' ? '#cde1f9' : '#3F51B5'
}
