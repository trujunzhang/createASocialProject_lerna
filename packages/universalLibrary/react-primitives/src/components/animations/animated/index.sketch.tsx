const Animated = require('animated')
const Easing = require('animated/lib/Easing')

import { StyleSheet, View, Text, Image } from 'react-sketchapp'

Animated.inject.FlattenStyle(StyleSheet.flatten)

const AnimatedSketch = {
  ...Animated,
  View: Animated.createAnimatedComponent(View),
  Text: Animated.createAnimatedComponent(Text),
  Image: Animated.createAnimatedComponent(Image)
}

export { AnimatedSketch as Animated, Easing }
