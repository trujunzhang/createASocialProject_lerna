// Type definitions for react-primitives 0.6
// Project: https://github.com/lelandrichardson/react-primitives
// Definitions by: Ahmed Ghoneim <https://github.com/aghoneim92>
//                 David Pett <https://github.com/davidpett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType } from 'react'
import * as React from 'react'
import {
  // Common
  StatusBar,
  Animated,
  Dimensions,
  Easing,
  Image,
  PixelRatio,
  PlatformOSType as RNPlatformOSType,
  StyleSheet,
  TextInput as RNTextInput,
  Text as RNText,
  TouchableOpacityProps,
  View as RNView,
  // Dialog
  ActivityIndicator,
  Modal,
  ActionSheetIOS,
  Switch,
  Picker,
  DatePickerIOS,
  DatePickerAndroid,
  // Props
  TouchableHighlightProps,
  PickerProps,
  PickerItemProps,
  TextInputProps,
  SwitchProps,
  ActivityIndicatorProps,
  ScrollViewProperties,
  ListViewProperties,
  ImageProps,
  ViewProps,
  TextProps,
  // styles
  StatusBarStyle,
  ViewStyle,
  TextStyle,
  ScaledSize,
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native'

export interface SketchAppProps {
  name?: string
}

export class View extends React.Component<ViewProps & SketchAppProps> { }
export class Text extends React.Component<TextProps & SketchAppProps> { }
export class TextInput extends React.Component<TextInputProps & SketchAppProps> { }

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
export const ScrollView: any
export const FlatList: any
export const KeyboardAwareScrollView: any

export function isIphoneX(): boolean;

export {
  StatusBar,
  Animated,
  Dimensions,
  Easing,
  Image,
  PixelRatio,
  StyleSheet,
  // Dialog
  ActivityIndicator,
  Modal,
  ActionSheetIOS,
  Switch,
  Picker,
  DatePickerIOS,
  DatePickerAndroid,
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  // styles
  StatusBarStyle,
  ViewStyle,
  TextStyle,
  ScaledSize,
  // Props
  TouchableHighlightProps,
  PickerProps,
  PickerItemProps,
  TextInputProps,
  SwitchProps,
  ActivityIndicatorProps,
  TouchableOpacityProps,
  ScrollViewProperties,
  ListViewProperties,
  ImageProps,
  ViewProps,
  TextProps
}
