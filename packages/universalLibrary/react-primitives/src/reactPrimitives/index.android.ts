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
import { ScrollView } from '../views/list/ScrollView'
import { ListView } from '../views/list/ListView'
import { FlatList } from '../views/list/FlatList'

export {
    ScrollView,
    ListView,
    FlatList
}
