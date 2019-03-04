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
