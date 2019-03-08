import { ReactPrimitivesHelper, StyleSheet } from './reactPrimitives'

// So important here, directly export.
export { StyleSheet }

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

import {
  // Animations
  Animated,
  Easing
} from './reactPrimitives'

export {
  // Animations
  Animated,
  Easing
}

// TextInput
import { TextInput } from './reactPrimitives'

export {
  // TextInput
  TextInput
}

// ReactPrimitivesHelper
// ===================================
import { IInjectionBaseModel, IInjectionTextModel } from './models'

const { View, Image } = ReactPrimitivesHelper as IInjectionBaseModel

export { View, Image }

const { Text } = ReactPrimitivesHelper as IInjectionTextModel

export { Text }
