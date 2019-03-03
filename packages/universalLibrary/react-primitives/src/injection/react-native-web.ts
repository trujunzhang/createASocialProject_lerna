import {
  PixelRatio,
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
  IReactPrimitivesModel,
  IInjectionBaseModel,
  IInjectionPixelRatioModel,
  IInjectionSystemModel,
  IInjectionAnimateModel,
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
  isIphoneX: () => {
    return false
  },
  StyleSheet: Object.assign(StyleSheet, { resolve })
}

const injectionAnimateModel: IInjectionAnimateModel = {
  Easing,
  Animated,
}

const injectionPixelRatioModel: IInjectionPixelRatioModel = {
  PixelRatio
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
  KeyboardAwareScrollView: null,
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

export const allInjectionModel: IReactPrimitivesModel = Object.assign(
  injectionBaseModel,
  injectionPixelRatioModel,
  injectionSystemModel,
  injectionAnimateModel,
  injectionTextModel,
  injectionListModel,
  injectionDialogModel,
  injectionTouchModel
)
