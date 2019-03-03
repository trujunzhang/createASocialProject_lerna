// import Animated from 'animated'
// import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing'
import {
  View,
  Text,
  Image,
  StyleSheet
  // TODO(lmr): Dimensions
} from 'react-sketchapp'

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

import { PixelRatioHelper } from '../modules/PixelRatio'
import { Dimensions } from './sketchapp/dimensions'
import { StatusBar } from './sketchapp/statusBar'

const TouchableMixin = {
  componentWillUnmount() { },
  touchableGetInitialState() {
    return { touchable: { touchState: undefined, responderID: null } }
  },
  touchableHandleResponderTerminationRequest() {
    return false
  },
  touchableHandleStartShouldSetResponder() {
    return false
  },
  touchableLongPressCancelsPress() {
    return true
  },
  touchableHandleResponderGrant() { },
  touchableHandleResponderRelease() { },
  touchableHandleResponderTerminate() { },
  touchableHandleResponderMove() { }
}

// Animated.inject.FlattenStyle(StyleSheet.flatten)

const Platform = {
  OS: 'sketch',
  Version: 1
}


const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image,
  isIphoneX: () => {
    return false
  },
  StyleSheet
}

// const animated = Object.assign(Animated, {
//   View: Animated.createAnimatedComponent(View),
//   Text: Animated.createAnimatedComponent(Text),
//   Image: Animated.createAnimatedComponent(Image)
// })

const injectionAnimateModel: IInjectionAnimateModel = {
  Easing: null,
  Animated: null
}

const injectionPixelRatioModel: IInjectionPixelRatioModel = {
  PixelRatio: new PixelRatioHelper(Dimensions)
}

const injectionSystemModel: IInjectionSystemModel = {
  // System
  StatusBar: {
    currentHeight: 44
  },
  Dimensions,
  Platform
}

const injectionTextModel: IInjectionTextModel = {
  // Text
  TextInput: null,
  Text
}

const injectionListModel: IInjectionListModel = {
  // List
  KeyboardAwareScrollView: null,
  ScrollView: null,
  ListView: null,
  FlatList: null
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

// const Touchable = require('../modules/Touchable')(Animated, StyleSheet, Platform, TouchableMixin)
const Touchable = null
const injectionTouchModel: IInjectionTouchModel = {
  // Touch
  PanResponder: null,
  TouchableOpacity: Touchable,
  TouchableHighlight: Touchable,
  TouchableNativeFeedback: Touchable,
  Touchable
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
