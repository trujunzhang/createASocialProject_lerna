import { ReactPrimitives as Generator } from './ReactPrimitives'

import { allInjectionModel } from '../injection/react-sketchapp'

export const ReactPrimitives = new Generator(allInjectionModel).end()


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