import * as React from 'react'

import {
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';

import {
  appRouteConfigs,
  appConfig
} from './appNavigatorHelper'

const AppNavigator = createDrawerNavigator(
  appRouteConfigs,
  appConfig
)

export const AppContainer = createAppContainer(AppNavigator);