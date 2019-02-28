
import { SideBar } from '../screens/sidebar'

import {
    Header,
} from '../screens/Header'

import {
    NHFooter as Footer,
} from '../screens/footer'

import { IconSetsList } from '../screens/vectorIcons'

import {
    NHPickerPage as NHPicker,
} from '../screens/picker'

import {
    ActionsheetPage as Actionsheet,
} from '../screens/actionsheet'

import {
    NHIconPage as NHIcon,
} from '../screens/icon'

import {
    NHButton,
} from '../screens/button'

import {
    NHCard,
} from '../screens/card'

import {
    NHForm,

} from '../screens/form'

import MultiListSwipe from '../screens/listSwipe/multi-list-swipe'

import {
    NHList,
} from '../screens/list'

import {
    NHToast,
} from '../screens/toast'

import {
    NHAccordion,
} from '../screens/accordion'

import Home from '../screens/home'
import Anatomy from '../screens/anatomy'
import NHBadge from '../screens/badge'
import NHCheckbox from '../screens/checkbox'
import NHDeckSwiper from '../screens/deckswiper'
import NHFab from '../screens/fab'
import ListSwipe from '../screens/listSwipe'
import NHLayout from '../screens/layout'
import NHRadio from '../screens/radio'
import NHSearchbar from '../screens/searchbar'
import NHSpinner from '../screens/spinner'
import NHTab from '../screens/tab'
import NHThumbnail from '../screens/thumbnail'
import NHTypography from '../screens/typography'
import Segment from '../screens/segment'
import NHDatePicker from '../screens/datepicker'

export const stackRouteConfigs = {
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
}

export const stackConfig = {
    initialRouteName: 'Home',
    //   initialRouteName: 'NHToast',
    // initialRouteName: 'NHIcon',
    // initialRouteName: 'IconSetsList',
    // initialRouteName: 'MultiListSwipe',
    contentOptions: {
        activeTintColor: '#e91e63'
    },
    contentComponent: (props) => <SideBar {...props} />
}