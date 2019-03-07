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
  IInjectionAnimateModel,
  IInjectionTextModel
} from '../models'

const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image,
}

const injectionAnimateModel: IInjectionAnimateModel = {
  Easing,
  Animated
}



const injectionTextModel: IInjectionTextModel = {
  // Text
  TextInput,
  Text
}

export const allInjectionModel: IReactPrimitivesModel = Object.assign(
  injectionBaseModel,
  injectionAnimateModel,
  injectionTextModel
)
