import { ReactPrimitives } from '../ReactPrimitives'
import {
  StatusBar,
  Animated,
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Platform,
  ListView,
  Easing,
  Dimensions,
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
  TouchableNativeFeedback
} from 'react-native'

import {
  AllInjectionModel,
  IInjectionBaseModel,
  IInjectionCustomModel,
  IInjectionListModel,
  IInjectionDialogModel,
  IInjectionTouchModel
} from './IInjection'

import { isIphoneX } from 'react-native-iphone-x-helper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const injectionBaseModel: IInjectionBaseModel =
{
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  Easing,
  Animated,
  isIphoneX,
  Platform: {
    OS: Platform.OS,
    Version: Platform.Version
  }
}

const injectionCustomModel: IInjectionCustomModel =
{
  // Custom
  StatusBar,
  Dimensions
}

const injectionListModel: IInjectionListModel =
{
  // List
  ListView
}

const injectionDialogModel: IInjectionDialogModel =
{
  // Dialog
  ActivityIndicator,
  Modal,
  ActionSheetIOS,
  Switch,
  Picker,
  DatePickerIOS,
  DatePickerAndroid
}

const injectionTouchModel: IInjectionTouchModel =
{
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Touchable: TouchableWithoutFeedback
}

export const allInjectionModel: AllInjectionModel = Object.assign(
  injectionBaseModel,
  injectionCustomModel,
  injectionListModel,
  injectionDialogModel,
  injectionTouchModel
)
