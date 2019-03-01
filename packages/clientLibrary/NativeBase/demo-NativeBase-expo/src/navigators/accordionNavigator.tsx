import * as React from 'react'

import { StackNavigator, DrawerNavigator } from 'react-navigation'

import { SideBar } from '../screens/sidebar'

import {
  NHAccordion,
  AccordionDefault,
  AccordionIcon,
  AccordionIconStyle,
  AccordionHeaderContentStyle,
  AccordionCustomHeaderContent
} from '../screens/accordion'

const Drawer = DrawerNavigator(
  {
    NHAccordion: { screen: NHAccordion }
  },
  {
    initialRouteName: 'NHAccordion',
    // initialRouteName: 'IconSetsList',
    // initialRouteName: 'MultiListSwipe',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: (props) => <SideBar {...props} />
  }
)

export const AccordionNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

    AccordionDefault: { screen: AccordionDefault },
    AccordionIcon: { screen: AccordionIcon },
    AccordionIconStyle: { screen: AccordionIconStyle },
    AccordionHeaderContentStyle: { screen: AccordionHeaderContentStyle },
    AccordionCustomHeaderContent: { screen: AccordionCustomHeaderContent }
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
)
