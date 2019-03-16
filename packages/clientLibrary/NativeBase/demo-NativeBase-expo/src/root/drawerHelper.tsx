import { SideBar } from '../screens/sidebar'

import Home from '../screens/home'

import { IconSetsList } from '../screens/vectorIcons'

import { fixRouteNameExist } from './utils'

import {
  // List home
  Header,
  NHFooter as Footer,
  NHPickerPage as NHPicker,
  NHIcon,
  MultiListSwipe,
  NHList,
  NHListSwipe,
  NHRadio,
  NHSearchbar,
  NHSpinner,
  NHTab,
  NBSegment,
  ActionsheetPage as Actionsheet,
  NHButton,
  NHCard,
  NHForm,
  NHAccordion,
  NHAnatomy,
  NHBadge,
  NHCheckbox,
  NHDeckSwiper,
  NHFab,
  NHDatePicker,
  // Toast
  NHToast,
  // Layout
  NHLayout,
  // thumbnail
  NHThumbnail,
  // Typography
  NHTypography,
  // Vector icons
  FeatherIcons
} from '@app/nb-demo-universal-components'

import { baseRouterConfs } from './routerConfigsModels'

export const stackRouteConfigs = {
  ...baseRouterConfs,

  Home: { screen: Home },
  Anatomy: { screen: NHAnatomy },
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
  ListSwipe: { screen: NHListSwipe },
  NHRadio: { screen: NHRadio },
  NHSearchbar: { screen: NHSearchbar },
  NHSpinner: { screen: NHSpinner },
  NHPicker: { screen: NHPicker },
  NHTab: { screen: NHTab },
  NHThumbnail: { screen: NHThumbnail },
  NHTypography: { screen: NHTypography },
  Segment: { screen: NBSegment },
  NHToast: { screen: NHToast },
  Actionsheet: { screen: Actionsheet },
  NHAccordion: { screen: NHAccordion },
  NHDatePicker: { screen: NHDatePicker },

  MultiListSwipe: { screen: MultiListSwipe },

  IconSetsList: { screen: IconSetsList },

  // Vector icons
  FeatherIcons: { screen: FeatherIcons }
}

/* const initialRouteName = 'Home' */
// Vector icons
/* const initialRouteName = 'DefaultButton' */
const initialRouteName = fixRouteNameExist(stackRouteConfigs)

// Buttons
/* const initialRouteName = 'IconBtn' */
/* const initialRouteName = 'NHButton' */

export const stackConfig = {
  initialRouteName,
  //   initialRouteName: 'NHToast',
  // initialRouteName: 'NHIcon',
  // initialRouteName: 'IconSetsList',
  // initialRouteName: 'MultiListSwipe',
  contentOptions: {
    activeTintColor: '#e91e63'
  },
  headerMode: 'none',
  contentComponent: (props) => <SideBar {...props} />
}
