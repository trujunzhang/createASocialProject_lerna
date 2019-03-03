import {
  Animated,
  StyleSheet,
  View,
  // List
  ListView,
  ScrollView,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Dimensions,
  Easing
} from 'react-native-web'

import { StatusBar } from './sketchapp/statusBar'

import {
  AllInjectionModel,
  IInjectionBaseModel,
  IInjectionSystemModel,
  IInjectionTextModel,
  IInjectionListModel,
  IInjectionDialogModel,
  IInjectionTouchModel
} from '../models'

// TODO: figure out a more appropriate way to get StyleSheet.resolve, or potentially remove the
// API alltogether.
function getDefault(m) {
  return m.__esModule === true ? m.default : m
}
const StyleRegistry = getDefault(
  require('react-native-web/dist/cjs/exports/StyleSheet/ReactNativeStyleResolver')
)

const emptyObject = {}

const resolve = (style) => {
  return StyleRegistry.resolve(style) || emptyObject
}

const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image,
  Easing,
  Animated,
  isIphoneX: () => {
    return false
  },
  StyleSheet: Object.assign(StyleSheet, { resolve })
}

const injectionSystemModel: IInjectionSystemModel = {
  // System
  StatusBar: {
    currentHeight: 44
  },
  Dimensions,
  Platform: {
    OS: Platform.OS,
    Version: Platform.Version
  }
}

const injectionTextModel: IInjectionTextModel = {
  // Text
  TextInput: null,
  Text
}

const injectionListModel: IInjectionListModel = {
  // List
  ScrollView,
  ListView,
  FlatList: ListView
}

const injectionDialogModel: IInjectionDialogModel = {
  // Dialog
  ActivityIndicator: null,
  Modal: null,
  ActionSheetIOS: null,
  Switch: null,
  Picker: null,
  DatePickerIOS: null,
  DatePickerAndroid: null
}

const injectionTouchModel: IInjectionTouchModel = {
  // Touch
  PanResponder: null,
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
