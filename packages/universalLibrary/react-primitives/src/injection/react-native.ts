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
  IInjectionSystemModel,
  IInjectionTextModel,
  IInjectionListModel,
  IInjectionDialogModel,
  IInjectionTouchModel
} from '../models'

import { isIphoneX } from 'react-native-iphone-x-helper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image,
  Easing,
  Animated,
  isIphoneX,
  StyleSheet,

}

const injectionSystemModel: IInjectionSystemModel = {
  // System
  StatusBar,
  Dimensions,
  Platform: {
    OS: Platform.OS,
    Version: Platform.Version
  }
}

const injectionTextModel: IInjectionTextModel = {
  // Text
  TextInput,
  Text
}

const injectionListModel: IInjectionListModel = {
  // List
  ListView
}

const injectionDialogModel: IInjectionDialogModel = {
  // Dialog
  ActivityIndicator,
  Modal,
  ActionSheetIOS,
  Switch,
  Picker,
  DatePickerIOS,
  DatePickerAndroid
}

const injectionTouchModel: IInjectionTouchModel = {
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Touchable: TouchableWithoutFeedback
}

export const allInjectionModel: AllInjectionModel = Object.assign(
  injectionBaseModel,
  injectionSystemModel,
  injectionTextModel,
  injectionListModel,
  injectionDialogModel,
  injectionTouchModel
)
