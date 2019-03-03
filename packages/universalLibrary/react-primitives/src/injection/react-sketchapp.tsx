import { ReactPrimitives } from '../ReactPrimitives'

import Animated from 'animated'
import Easing from 'animated/lib/Easing'
import {
  View,
  Text,
  Image,
  StyleSheet
  // TODO(lmr): Dimensions
} from 'react-sketchapp'

import {
  AllInjectionModel,
  IInjectionBaseModel,
  IInjectionCustomModel,
  IInjectionTextModel,
  IInjectionListModel,
  IInjectionDialogModel,
  IInjectionTouchModel
} from './IInjection'

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

Animated.inject.FlattenStyle(StyleSheet.flatten)

const Platform = {
  OS: 'sketch',
  Version: 1
}

const Touchable = require('../modules/Touchable')(
  Animated,
  StyleSheet,
  Platform,
  TouchableMixin
)

const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image,
  Easing,
  Animated: Object.assign(Animated, {
    View: Animated.createAnimatedComponent(View),
    Text: Animated.createAnimatedComponent(Text),
    Image: Animated.createAnimatedComponent(Image)
  }),
  isIphoneX: () => {
    return false
  },
  StyleSheet,
  Platform
}

const injectionCustomModel: IInjectionCustomModel = {
  // Custom
  StatusBar,
  Dimensions
}

const injectionTextModel: IInjectionTextModel = {
  // Text
  TextInput: null,
  Text
}
const injectionListModel: IInjectionListModel = {
  // List
  ListView: null
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
  TouchableOpacity: Touchable,
  TouchableHighlight: Touchable,
  TouchableNativeFeedback: Touchable,
  Touchable
}

export const allInjectionModel: AllInjectionModel = Object.assign(
  injectionBaseModel,
  injectionCustomModel,
  injectionTextModel,
  injectionListModel,
  injectionDialogModel,
  injectionTouchModel
)
