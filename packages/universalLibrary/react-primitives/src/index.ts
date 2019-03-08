import { ReactPrimitivesHelper, StyleSheet, Animated } from './reactPrimitives'

// So important here, directly export.
export { StyleSheet, Animated }

import {
  // List
  KeyboardAwareScrollView,
  ScrollView,
  ListView,
  FlatList
} from './reactPrimitives'

export {
  // List
  KeyboardAwareScrollView,
  ScrollView,
  ListView,
  FlatList
}

import {
  // Dialog
  ActivityIndicator,
  Modal,
  ActionSheetIOS,
  Switch,
  Picker,
  DatePickerIOS,
  DatePickerAndroid
} from './reactPrimitives'

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

import {
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback
} from './reactPrimitives'

export {
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback
}

import {
  // System
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  isIphoneX
} from './reactPrimitives'

export {
  // System
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  isIphoneX
}

// ReactPrimitivesHelper
// ===================================
import { IInjectionBaseModel, IInjectionAnimateModel, IInjectionTextModel } from './models'

const { View, Image } = ReactPrimitivesHelper as IInjectionBaseModel

export { View, Image }

const { Easing } = ReactPrimitivesHelper as IInjectionAnimateModel

export { Easing }

const { TextInput, Text } = ReactPrimitivesHelper as IInjectionTextModel

export { TextInput, Text }
