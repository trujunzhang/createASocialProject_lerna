import * as React from 'react'

import { StackNavigator, DrawerNavigator } from 'react-navigation'

import { SideBar } from '../screens/sidebar'

import {
  ActionsheetPage as Actionsheet,
  RegularActionSheet,
  IconActionSheet
} from '../screens/actionsheet'

const Drawer = DrawerNavigator(
  {
    Actionsheet: { screen: Actionsheet }
  },
  {
    initialRouteName: 'Actionsheet',
    // initialRouteName: 'IconSetsList',
    // initialRouteName: 'MultiListSwipe',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: (props) => <SideBar {...props} />
  }
)

export const ActionsheetNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

    RegularActionSheet: { screen: RegularActionSheet },
    IconActionSheet: { screen: IconActionSheet }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
)
