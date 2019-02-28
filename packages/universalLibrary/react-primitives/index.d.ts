// Type definitions for react-primitives 0.6
// Project: https://github.com/lelandrichardson/react-primitives
// Definitions by: Ahmed Ghoneim <https://github.com/aghoneim92>
//                 David Pett <https://github.com/davidpett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType } from 'react'
import * as React from 'react'
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  PixelRatio,
  TouchableHighlight,
  PlatformOSType as RNPlatformOSType,
  StyleSheet,
  Text as RNText,
  TouchableOpacityProps,
  View as RNView,
  ViewProps,
  TextProps
} from 'react-native'

export interface SketchAppProps {
  name?: string
}

export class View extends React.Component<ViewProps & SketchAppProps> {}
export class Text extends React.Component<TextProps & SketchAppProps> {}

export const Touchable: ComponentType<TouchableOpacityProps>

// react-primitives also supports react-sketchapp and react-vr as platforms
export type PlatformOSType = RNPlatformOSType | 'sketch' | 'vr'
export interface PlatformStatic {
  OS: PlatformOSType
  Version: number | string
  select<T>(specifics: { [platform in PlatformOSType | 'default']?: T }): T
}
export const Platform: PlatformStatic

export const ListView: any

export {
  Animated,
  Dimensions,
  Easing,
  Image,
  PixelRatio,
  StyleSheet,
  TouchableHighlight,
  ViewProps,
  TextProps
  // Text,
  // View
}
