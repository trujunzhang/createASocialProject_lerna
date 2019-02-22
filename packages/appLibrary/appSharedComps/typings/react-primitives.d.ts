// Type definitions for react-primitives 0.6
// Project: https://github.com/lelandrichardson/react-primitives
// Definitions by: Ahmed Ghoneim <https://github.com/aghoneim92>
//                 David Pett <https://github.com/davidpett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType } from 'react'
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  PixelRatio,
  PlatformOSType as RNPlatformOSType,
  StyleSheet,
  Text,
  TouchableOpacityProps,
  View as RNView
} from 'react-native'

declare module 'react-primitives' {
  const Touchable: ComponentType<TouchableOpacityProps>

  // react-primitives also supports react-sketchapp and react-vr as platforms
  type PlatformOSType = RNPlatformOSType | 'sketch' | 'vr'
  interface PlatformStatic {
    OS: PlatformOSType
    Version: number | string
    select<T>(specifics: { [platform in PlatformOSType | 'default']?: T }): T
  }
  const Platform: PlatformStatic

  interface View extends RNView {
    name?: string
  }

  export { Animated, Dimensions, Easing, Image, PixelRatio, StyleSheet, Text, View }
}
