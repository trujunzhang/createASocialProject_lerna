import { SideBar } from '../screens/sidebar'


import {
  Header,
  NHFooter as Footer,
  NHPickerPage as NHPicker,
  NHIconPage as NHIcon,
  MultiListSwipe,
  NHList,
  ListSwipe,
  NHRadio,
  NHSearchbar,
  NHSpinner,
  NHTab,
  Segment
} from '@app/nb-demo-shared-components'

import { IconSetsList } from '../screens/vectorIcons'


import { ActionsheetPage as Actionsheet } from '@app/nb-demo-shared-components'


import { NHButton } from '@app/nb-demo-shared-components'

import {
  NHCard,
  NHForm,
  NHAccordion,
  NHAnatomy,
  NHBadge,
  NHCheckbox,
  NHDeckSwiper,
  NHFab,
  NHDatePicker
} from '@app/nb-demo-shared-components'


import { NHToast } from '../screens/toast'

import Home from '../screens/home'
import NHLayout from '../screens/layout'
import NHThumbnail from '../screens/thumbnail'
import NHTypography from '../screens/typography'

export const stackRouteConfigs = {
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
}

/* const initialRouteName = 'Home' */
const initialRouteName = 'NHButton'

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
