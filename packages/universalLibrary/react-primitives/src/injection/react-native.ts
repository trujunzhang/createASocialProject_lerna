import {
  StatusBar,
  PixelRatio,
  Animated,
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Platform,
  Easing,
  Dimensions,
  // List
  ScrollView,
  ListView,
  FlatList,
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

// import { isIphoneX } from 'react-native-iphone-x-helper'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image,
  isIphoneX: () => {
    return false
  },
  StyleSheet
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
  KeyboardAwareScrollView: null,
  ScrollView,
  ListView,
  FlatList
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
