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
import { ScrollView } from '../views/list/ScrollView'
import { ListView } from '../views/list/ListView'
import { FlatList } from '../views/list/FlatList'

export {
    ScrollView,
    ListView,
    FlatList
}