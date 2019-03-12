import * as React from 'react'
import { createStackNavigator } from 'react-navigation'

import { stackRouteConfigs, stackConfig } from './drawerHelper'

import { baseRouterConfs } from './rootrouterConfigsModels'

const DraftsStack = createStackNavigator(stackRouteConfigs, stackConfig)
export const appRouteConfigs = {
  Drawer: { screen: DraftsStack },

  ...baseRouterConfs
}

export const appConfig = {
  initialRouteName: 'Drawer',
  headerMode: 'none'
}
