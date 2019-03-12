import * as React from 'react'
import { createStackNavigator } from 'react-navigation'

import { stackRouteConfigs, stackConfig } from './drawerHelper'

import { IconList } from '../screens/vectorIcons'
import {
    // Advanced
    ListItemHeaderObject,
    ListItemIconObject,
    ListItemListObject,
    ListItemListSwipeObject,
    ListItemPickerObject,
    ListItemRadioObject,
    ListItemSearchBarObject,
    ListItemSegmentObject,
    ListItemSpinnerObject,
    ListItemTabObject,
    // Base
    ListItemLayoutObject,
    ListItemThumbnailObject,
    ListItemToastObject,
    ListItemTypographyObject,
    // Screens
    ListItemAccordionObject,
    ListItemActionSheetObject,
    ListItemAnatomyObject,
    ListItemBadgeObject,
    ListItemButtonObject,
    ListItemCardObject,
    ListItemCheckboxObject,
    ListItemDatePickerObject,
    ListItemDeckSwiperObject,
    ListItemFabObject,
    ListItemFooterObject,
    ListItemFormObject,


 } from '@app/nb-demo-shared-components'

const DraftsStack = createStackNavigator(stackRouteConfigs, stackConfig)
export const appRouteConfigs = {
    Drawer: { screen: DraftsStack },
    IconList: { screen: IconList },

    // Advanced
    ...ListItemHeaderObject,
    ...ListItemIconObject,
    ...ListItemListObject,
    ...ListItemListSwipeObject,
    ...ListItemPickerObject,
    ...ListItemRadioObject,
    ...ListItemSearchBarObject,
    ...ListItemSegmentObject,
    ...ListItemSpinnerObject,
    ...ListItemTabObject,
    // Base
    ...ListItemLayoutObject,
    ...ListItemThumbnailObject,
    ...ListItemToastObject,
    ...ListItemTypographyObject,
    // Screens
    ...ListItemAccordionObject,
    ...ListItemActionSheetObject,
    ...ListItemAnatomyObject,
    ...ListItemBadgeObject,
    ...ListItemButtonObject,
    ...ListItemCardObject,
    ...ListItemCheckboxObject,
    ...ListItemDatePickerObject,
    ...ListItemDeckSwiperObject,
    ...ListItemFabObject,
    ...ListItemFooterObject,
    ...ListItemFormObject,









}

export const appConfig = {
  initialRouteName: 'Drawer',
  headerMode: 'none'
}
