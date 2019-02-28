import * as React from 'react'

import {
  createDrawerNavigator,
} from 'react-navigation';

import {
  appRouteConfigs,
  appConfig
} from './appNavigatorHelper'

export const AppNavigator = createDrawerNavigator(
  appRouteConfigs,
  appConfig
)