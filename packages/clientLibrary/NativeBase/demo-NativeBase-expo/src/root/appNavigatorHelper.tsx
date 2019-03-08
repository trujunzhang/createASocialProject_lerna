import * as React from 'react'
import { createStackNavigator } from 'react-navigation'

import { stackRouteConfigs, stackConfig } from './drawerHelper'

import { IconList } from '../screens/vectorIcons'
import {
  // Header
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
  HeaderTransparent,
  // Footer
  BasicFooter,
  IconFooter,
  IconText,
  BadgeFooter,
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
  // Button
  DefaultButton,
  OutlineButton,
  RoundedButton,
  BlockButton,
  FullButton,
  CustomButton,
  TransparentButton,
  IconBtn,
  DisabledButton,
  // Card
  BasicCard,
  NHCardItemBordered,
  NHCardItemButton,
  NHCardImage,
  NHCardShowcase,
  NHCardList,
  NHCardHeaderAndFooter,
  NHCardTransparent,
  NHCardCustomBorderRadius,
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
  HeaderTransparent: { screen: HeaderTransparent },

  BasicFooter: { screen: BasicFooter },
  IconFooter: { screen: IconFooter },
  IconText: { screen: IconText },
  BadgeFooter: { screen: BadgeFooter },

  IconList: { screen: IconList },

  Default: { screen: DefaultButton },
  Outline: { screen: OutlineButton },
  Rounded: { screen: RoundedButton },
  Block: { screen: BlockButton },
  Full: { screen: FullButton },
  Custom: { screen: CustomButton },
  Transparent: { screen: TransparentButton },
  IconBtn: { screen: IconBtn },
  Disabled: { screen: DisabledButton },

  BasicCard: { screen: BasicCard },
  NHCardItemBordered: { screen: NHCardItemBordered },
  NHCardItemButton: { screen: NHCardItemButton },
  NHCardImage: { screen: NHCardImage },
  NHCardShowcase: { screen: NHCardShowcase },
  NHCardList: { screen: NHCardList },
  NHCardHeaderAndFooter: { screen: NHCardHeaderAndFooter },
  NHCardTransparent: { screen: NHCardTransparent },
  NHCardCustomBorderRadius: { screen: NHCardCustomBorderRadius },

  SimpleDeck: { screen: SimpleDeck },
  AdvancedDeck: { screen: AdvancedDeck },

  BasicFab: { screen: BasicFab },
  MultipleFab: { screen: MultipleFab },

  FixedLabel: { screen: FixedLabel },
  InlineLabel: { screen: InlineLabel },
  FloatingLabel: { screen: FloatingLabel },
  PlaceholderLabel: { screen: PlaceholderLabel },
  StackedLabel: { screen: StackedLabel },
  RegularInput: { screen: RegularInput },
  UnderlineInput: { screen: UnderlineInput },
  RoundedInput: { screen: RoundedInput },
  IconInput: { screen: IconInput },
  SuccessInput: { screen: SuccessInput },
  ErrorInput: { screen: ErrorInput },
  DisabledInput: { screen: DisabledInput },
  PickerInput: { screen: PickerInput },
  TextArea: { screen: TextAreaForm },

  Icons: { screen: Icons },
  BasicIcon: { screen: BasicIcon },
  StateIcon: { screen: StateIcon },
  PlatformSpecificIcon: { screen: PlatformSpecificIcon },
  IconFamily: { screen: IconFamily },

  RowNB: { screen: RowNB },
  ColumnNB: { screen: ColumnNB },
  NestedGrid: { screen: NestedGrid },
  CustomRow: { screen: CustomRow },
  CustomCol: { screen: CustomCol },

  NHBasicList: { screen: NHBasicList },
  NHListItemSelected: { screen: NHListItemSelected },
  NHListDivider: { screen: NHListDivider },
  NHListSeparator: { screen: NHListSeparator },
  NHListHeader: { screen: NHListHeader },
  NHListIcon: { screen: NHListIcon },
  NHListAvatar: { screen: NHListAvatar },
  NHListThumbnail: { screen: NHListThumbnail },
  NHListItemNoIndent: { screen: NHListItemNoIndent },

  BasicListSwipe: { screen: BasicListSwipe },
  SwipeRowCustomStyle: { screen: SwipeRowCustomStyle },
  MultiListSwipe: { screen: MultiListSwipe },

  RegularPicker: { screen: RegularPicker },
  PickerWithIcon: { screen: PickerWithIcon },
  PlaceholderPicker: { screen: PlaceholderPicker },
  PlaceholderPickerNote: { screen: PlaceholderPickerNote },
  BackButtonPicker: { screen: BackButtonPicker },
  PickerTextItemText: { screen: PickerTextItemText },
  HeaderPicker: { screen: HeaderPicker },
  HeaderStylePicker: { screen: HeaderStylePicker },
  CustomHeaderPicker: { screen: CustomHeaderPicker },
  PickerWithIconStyle: { screen: PickerWithIconStyle },

  NHCustomRadio: { screen: NHCustomRadio },
  NHDefaultRadio: { screen: NHDefaultRadio },

  BasicTab: { screen: BasicTab },
  ConfigTab: { screen: ConfigTab },
  ScrollableTab: { screen: ScrollableTabExample },

  BasicSegment: { screen: SegmentHeader },
  AdvSegment: { screen: AdvSegment },
  SegmentHeaderIcon: { screen: SegmentHeaderIcon },

  BasicToast: { screen: BasicToast },
  ToastDuration: { screen: ToastDuration },
  ToastPosition: { screen: ToastPosition },
  ToastType: { screen: ToastType },
  ToastText: { screen: ToastText },
  ToastButton: { screen: ToastButton },

  RegularActionSheet: { screen: RegularActionSheet },
  IconActionSheet: { screen: IconActionSheet },

  AccordionDefault: { screen: AccordionDefault },
  AccordionIcon: { screen: AccordionIcon },
  AccordionIconStyle: { screen: AccordionIconStyle },
  AccordionHeaderContentStyle: { screen: AccordionHeaderContentStyle },
  AccordionCustomHeaderContent: { screen: AccordionCustomHeaderContent }
}

export const appConfig = {
  initialRouteName: 'Drawer',
  headerMode: 'none'
}
