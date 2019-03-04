import { ReactPrimitivesHelper as Generator } from '../ReactPrimitivesHelper'

import { allInjectionModel } from '../injection/react-sketchapp'

export const ReactPrimitivesHelper = new Generator(allInjectionModel).end()


import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-sketchapp'

const Animated = require('animated');
const Easing = require('animated/lib/Easing');
Animated.inject.FlattenStyle(StyleSheet.flatten);

const animated = {
    ...Animated,
    View: Animated.createAnimatedComponent(View),
    Text: Animated.createAnimatedComponent(Text),
    Image: Animated.createAnimatedComponent(Image),
}

export { animated as Animated }

export {
    StyleSheet
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