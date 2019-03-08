import { ReactPrimitivesHelper as Generator } from '../ReactPrimitivesHelper'

import { allInjectionModel } from '../injection/react-native'

export const ReactPrimitivesHelper = new Generator(allInjectionModel).end()

import { StyleSheet } from 'react-native'

export { StyleSheet }

// List
import { KeyboardAwareScrollView } from '../components/list/keyboardAwareScrollView'
import { ScrollView } from '../components/list/scrollView'
import { ListView } from '../components/list/listView'
import { FlatList } from '../components/list/flatList'

export {
  // List
  KeyboardAwareScrollView,
  ScrollView,
  ListView,
  FlatList
}

// Dialog
import { ActivityIndicator } from '../components/dialog/activityIndicator'
import { Modal } from '../components/dialog/modal'
import { ActionSheetIOS } from '../components/dialog/actionSheetIOS'
import { Switch } from '../components/dialog/switch'
import { Picker } from '../components/dialog/picker'
import { DatePickerIOS } from '../components/dialog/datePickerIOS'
import { DatePickerAndroid } from '../components/dialog/datePickerAndroid'

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

// Touch
import { PanResponder } from '../components/touch/panResponder'
import { TouchableOpacity } from '../components/touch/touchableOpacity'
import { TouchableHighlight } from '../components/touch/touchableHighlight'
import { TouchableNativeFeedback } from '../components/touch/touchableNativeFeedback'

export {
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback
}

// System
import { Dimensions } from '../components/System/dimensions'
import { PixelRatio } from '../components/System/pixelRatio'
import { Platform } from '../components/System/platform'
import { StatusBar } from '../components/System/statusBar'
import { isIphoneX } from '../components/System/isIphoneX'

export {
  // System
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  isIphoneX
}

// Animations
import { Animated, Easing } from '../components/animations/animated'

export {
  // Animations
  Animated,
  Easing
}

// TextInput
import { TextInput } from '../components/text/textInput'

export {
  // TextInput
  TextInput
}
