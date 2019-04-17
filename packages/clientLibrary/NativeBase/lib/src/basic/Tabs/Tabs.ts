import * as React from 'react'

import { ReactNative, RnTextStyleProp, RnViewStyleProp } from '@appUtils/rnCommonProps'

export interface ScrollableTabProps {
  goToPage?: Function
  activeTab?: number
  tabs?: Array<any>
  backgroundColor?: string
  activeTextColor?: string
  inactiveTextColor?: string
  scrollOffset?: number
  style?: RnViewStyleProp
  tabStyle?: RnViewStyleProp
  tabsContainerStyle?: RnViewStyleProp
  renderTab?: Function
  underlineStyle?: RnViewStyleProp
  onScroll?: Function
}
/**
 * NativeBase.ScrollableTab
 */
export class ScrollableTab extends React.Component<ScrollableTabProps, any> {}

/**
 * see Widget Tabs.js
 */
export interface TabsProps {
  renderTabBar?: Function
  tabBarPosition?: 'top' | 'bottom'
  edgeHitWidth?: number
  springTension?: number
  springFriction?: number
  onChangeTab?: Function
  page?: number
  locked?: boolean
  initialPage?: number
  tabBarUnderlineStyle?: RnViewStyleProp | Array<RnViewStyleProp>
  tabBarBackgroundColor?: string
  tabBarActiveTextColor?: string
  tabBarInactiveTextColor?: string
  tabBarTextStyle?: RnTextStyleProp
  tabContainerStyle?: RnViewStyleProp | Array<RnViewStyleProp>
  style?: RnViewStyleProp | Array<RnViewStyleProp>
  contentProps?: ReactNative.ScrollViewProperties
  prerenderingSiblingsNumber?: number
}
