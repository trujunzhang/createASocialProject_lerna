import * as React from 'react'

import { StackNavigator, DrawerNavigator } from 'react-navigation'

import { SideBar } from '../screens/sidebar'

import {
  Header,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Header7,
  Header8,
  HeaderSpan,
  HeaderNoLeft,
  HeaderNoShadow,
  HeaderTransparent
} from '../screens/Header'

const Drawer = DrawerNavigator(
  {
    Header: { screen: Header }
  },
  {
    initialRouteName: 'Header',
    // initialRouteName: 'IconSetsList',
    // initialRouteName: 'MultiListSwipe',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: (props) => <SideBar {...props} />
  }
)

export const HeaderNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

    Header1: { screen: Header1 },
    Header2: { screen: Header2 },
    Header3: { screen: Header3 },
    Header4: { screen: Header4 },
    Header5: { screen: Header5 },
    Header6: { screen: Header6 },
    Header7: { screen: Header7 },
    Header8: { screen: Header8 },
    HeaderSpan: { screen: HeaderSpan },
    HeaderNoShadow: { screen: HeaderNoShadow },
    HeaderNoLeft: { screen: HeaderNoLeft },
    HeaderTransparent: { screen: HeaderTransparent }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
)
