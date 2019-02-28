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

import {
  NHFooter as Footer,
  BasicFooter,
  IconFooter,
  IconText,
  BadgeFooter
} from '../screens/footer'

import { IconList, IconSetsList } from '../screens/vectorIcons'

import {
  NHPickerPage as NHPicker,
  PickerWithIconStyle,
  RegularPicker,
  PickerWithIcon,
  PlaceholderPicker,
  PlaceholderPickerNote,
  BackButtonPicker,
  PickerTextItemText,
  HeaderPicker,
  HeaderStylePicker,
  CustomHeaderPicker
} from '../screens/picker'

import {
  ActionsheetPage as Actionsheet,
  RegularActionSheet,
  IconActionSheet
} from '../screens/actionsheet'

import {
  NHIconPage as NHIcon,
  Icons,
  BasicIcon,
  StateIcon,
  PlatformSpecificIcon,
  IconFamily
} from '../screens/icon'

import {
  NHButton,
  Default,
  Outline,
  Rounded,
  Block,
  Full,
  Custom,
  Transparent,
  IconBtn,
  Disabled
} from '../screens/button'

import {
  NHCard,
  BasicCard,
  NHCardItemBordered,
  NHCardItemButton,
  NHCardImage,
  NHCardShowcase,
  NHCardList,
  NHCardHeaderAndFooter,
  NHCardTransparent,
  NHCardCustomBorderRadius
} from '../screens/card'

import BasicFab from '../screens/fab/basic'
import MultipleFab from '../screens/fab/multiple'

import {
  NHForm,
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
} from '../screens/form'

import RowNB from '../screens/layout/row'
import ColumnNB from '../screens/layout/column'
import NestedGrid from '../screens/layout/nested'
import CustomRow from '../screens/layout/customRow'
import CustomCol from '../screens/layout/customCol'
import BasicListSwipe from '../screens/listSwipe/basic-list-swipe'
import SwipeRowCustomStyle from '../screens/listSwipe/swipe-row-style'
import MultiListSwipe from '../screens/listSwipe/multi-list-swipe'
import NHBasicList from '../screens/list/basic-list'
import NHListItemSelected from '../screens/list/listitem-selected'
import NHListDivider from '../screens/list/list-divider'
import NHListSeparator from '../screens/list/list-separator'
import NHListHeader from '../screens/list/list-headers'
import NHListIcon from '../screens/list/list-icon'
import NHListAvatar from '../screens/list/list-avatar'
import NHListThumbnail from '../screens/list/list-thumbnail'
import NHListItemNoIndent from '../screens/list/listitem-noIndent'

import BasicTab from '../screens/tab/basicTab'
import ConfigTab from '../screens/tab/configTab'
import ScrollableTab from '../screens/tab/scrollableTab'
import BasicSegment from '../screens/segment/SegmentHeader'
import SegmentHeaderIcon from '../screens/segment/SegmentHeaderIcon'
import BasicToast from '../screens/toast/basic-toast'
import ToastDuration from '../screens/toast/toast-duration'
import ToastPosition from '../screens/toast/toast-position'
import ToastType from '../screens/toast/toast-type'
import ToastText from '../screens/toast/toast-text'
import ToastButton from '../screens/toast/toast-button'
import AdvSegment from '../screens/segment/segmentTab'
import SimpleDeck from '../screens/deckswiper/simple'
import AdvancedDeck from '../screens/deckswiper/advanced'
import NHCustomRadio from '../screens/radio/custom'
import NHDefaultRadio from '../screens/radio/default'

import {
  NHAccordion,
  AccordionDefault,
  AccordionIcon,
  AccordionIconStyle,
  AccordionHeaderContentStyle,
  AccordionCustomHeaderContent
} from '../screens/accordion'

import Home from '../screens/home'
import Anatomy from '../screens/anatomy'
import NHBadge from '../screens/badge'
import NHCheckbox from '../screens/checkbox'
import NHDeckSwiper from '../screens/deckswiper'
import NHFab from '../screens/fab'
import TextArea from '../screens/form/textArea'
import ListSwipe from '../screens/listSwipe'
import NHLayout from '../screens/layout'
import NHList from '../screens/list'
import NHRadio from '../screens/radio'
import NHSearchbar from '../screens/searchbar'
import NHSpinner from '../screens/spinner'
import NHTab from '../screens/tab'
import NHThumbnail from '../screens/thumbnail'
import NHTypography from '../screens/typography'
import Segment from '../screens/segment'
import NHToast from '../screens/toast'
import NHDatePicker from '../screens/datepicker'

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Anatomy: { screen: Anatomy },
    Header: { screen: Header },
    Footer: { screen: Footer },
    NHBadge: { screen: NHBadge },
    NHButton: { screen: NHButton },
    NHCard: { screen: NHCard },
    NHCheckbox: { screen: NHCheckbox },
    NHDeckSwiper: { screen: NHDeckSwiper },
    NHFab: { screen: NHFab },
    NHForm: { screen: NHForm },
    NHIcon: { screen: NHIcon },
    NHLayout: { screen: NHLayout },
    NHList: { screen: NHList },
    ListSwipe: { screen: ListSwipe },
    NHRadio: { screen: NHRadio },
    NHSearchbar: { screen: NHSearchbar },
    NHSpinner: { screen: NHSpinner },
    NHPicker: { screen: NHPicker },
    NHTab: { screen: NHTab },
    NHThumbnail: { screen: NHThumbnail },
    NHTypography: { screen: NHTypography },
    Segment: { screen: Segment },
    NHToast: { screen: NHToast },
    Actionsheet: { screen: Actionsheet },
    NHAccordion: { screen: NHAccordion },
    NHDatePicker: { screen: NHDatePicker },

    MultiListSwipe: { screen: MultiListSwipe },

    IconSetsList: { screen: IconSetsList }
  },
  {
    // initialRouteName: 'Home',
    //   initialRouteName: 'NHToast',
    initialRouteName: 'NHIcon',
    // initialRouteName: 'IconSetsList',
    // initialRouteName: 'MultiListSwipe',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: (props) => <SideBar {...props} />
  }
)

export const AppNavigator = StackNavigator(
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
    HeaderTransparent: { screen: HeaderTransparent },

    BasicFooter: { screen: BasicFooter },
    IconFooter: { screen: IconFooter },
    IconText: { screen: IconText },
    BadgeFooter: { screen: BadgeFooter },

    IconList: { screen: IconList },

    Default: { screen: Default },
    Outline: { screen: Outline },
    Rounded: { screen: Rounded },
    Block: { screen: Block },
    Full: { screen: Full },
    Custom: { screen: Custom },
    Transparent: { screen: Transparent },
    IconBtn: { screen: IconBtn },
    Disabled: { screen: Disabled },

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
    TextArea: { screen: TextArea },

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
    ScrollableTab: { screen: ScrollableTab },

    BasicSegment: { screen: BasicSegment },
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
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none'
  }
)
