import { ReactPrimitivesHelper as Generator } from '../ReactPrimitivesHelper'

import { allInjectionModel } from '../injection/react-native-web'

export const ReactPrimitivesHelper = new Generator(allInjectionModel).end()

import {
    StyleSheet,
    Animated
} from 'react-native-web'

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
import { ActivityIndicator } from '../components/dialog/activityIndicator'
import { Modal } from '../components/dialog/modal'
import { ActionSheetIOS } from '../components/dialog/actionSheetIOS'
import { Switch } from '../components/dialog/switch'
import { Picker } from '../components/dialog/picker'
import { DatePickerIOS } from '../components/dialog/datePickerIOS'
import { DatePickerAndroid } from '../components/dialog/datePickerAndroid'

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