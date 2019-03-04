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
} from '../models'

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

export const allInjectionModel: IReactPrimitivesModel = Object.assign(
  injectionBaseModel,
  injectionPixelRatioModel,
  injectionSystemModel,
  injectionAnimateModel,
  injectionTextModel,
)
