import { ReactPrimitivesHelper as Generator } from '../ReactPrimitivesHelper'

import { allInjectionModel } from '../injection/react-native'

export const ReactPrimitivesHelper = new Generator(allInjectionModel).end()

import {
    StyleSheet,
    Animated
} from 'react-native'

export {
    StyleSheet,
    Animated
}


// List
import { ScrollView } from '../components/list/scrollView'
import { ListView } from '../components/list/listView'
import { FlatList } from '../components/list/flatList'

export {
    ScrollView,
    ListView,
    FlatList
}


// Dialog
import { ActivityIndicator } from '../components/touch/activityIndicator'
import { Modal } from '../components/touch/modal'
import { ActionSheetIOS } from '../components/touch/actionSheetIOS'
import { Switch } from '../components/touch/switch'
import { Picker } from '../components/touch/picker'
import { DatePickerIOS } from '../components/touch/datePickerIOS'
import { DatePickerAndroid } from '../components/touch/datePickerAndroid'

export {
    // Dialog
    ActivityIndicator,
    Modal,
    ActionSheetIOS,
    Switch,
    Picker,
    DatePickerIOS,
    DatePickerAndroid
}