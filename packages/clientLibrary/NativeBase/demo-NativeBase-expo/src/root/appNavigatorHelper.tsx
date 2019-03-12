import * as React from 'react'
import { createStackNavigator } from 'react-navigation'

import { stackRouteConfigs, stackConfig } from './drawerHelper'

import { IconList } from '../screens/vectorIcons'
import {
  // Header
  ListItemHeaderObject,
    ListItemFooterObject ,
    ListItemButtonObject ,
    ListItemCardObject ,
  // Segment
  SegmentNB as AdvSegment,
  // Deck
  SimpleDeck,
  AdvancedDeck,
  // Picker
  PickerWithIconStyle,
  RegularPicker,
  PickerWithIcon,
  PlaceholderPicker,
  PlaceholderPickerNote,
  BackButtonPicker,
  PickerTextItemText,
  HeaderPicker,
  HeaderStylePicker,
  CustomHeaderPicker,
  // ActionSheet
  RegularActionSheet,
  IconActionSheet,
  // Icons
  Icons,
  BasicIcon,
  StateIcon,
  PlatformSpecificIcon,
  IconFamily,
    // Fab
  BasicFab,
  MultipleFab,
  // Label
  FixedLabel,
  InlineLabel,
  FloatingLabel,
  PlaceholderLabel,
  StackedLabel,
  RegularInput,
  UnderlineInput,
  RoundedInput,
  IconInput,
  SuccessInput,
  ErrorInput,
  DisabledInput,
  PickerInput,
  // Swipe
  BasicListSwipe,
  SwipeRowCustomStyle,
  MultiListSwipe,
  // List
  NHBasicList,
  NHListItemSelected,
  NHListDivider,
  NHListSeparator,
  NHListHeader,
  NHListIcon,
  NHListAvatar,
  NHListThumbnail,
  NHListItemNoIndent,
  // Tab
  BasicTab,
  ConfigTab,
  ScrollableTabExample,
  SegmentHeader, // BasicSegment,
  SegmentHeaderIcon,
  // Radio
  NHCustomRadio,
  NHDefaultRadio,
  // According
  AccordionDefault,
  AccordionIcon,
  AccordionIconStyle,
  AccordionHeaderContentStyle,
  AccordionCustomHeaderContent,
  // TextArea
  TextAreaForm,
  // Layout
  RowNB,
  ColumnNB,
  NestedGrid,
  CustomRow,
  CustomCol,
  // Toast
  BasicToast,
  ToastDuration,
  ToastPosition,
  ToastType,
  ToastText,
  ToastButton
} from '@app/nb-demo-shared-components'

const DraftsStack = createStackNavigator(stackRouteConfigs, stackConfig)
export const appRouteConfigs = {
  Drawer: { screen: DraftsStack },
    IconList: { screen: IconList },

...ListItemHeaderObject,
    ...ListItemFooterObject ,
    ... ListItemButtonObject ,
    ... ListItemCardObject ,










}

export const appConfig = {
  initialRouteName: 'Drawer',
  headerMode: 'none'
}
