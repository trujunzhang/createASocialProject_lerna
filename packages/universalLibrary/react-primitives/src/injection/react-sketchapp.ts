// import Animated from 'animated'
// import Animated from 'animated/lib/targets/react-dom';
// import Easing from 'animated/lib/Easing'
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
  IInjectionTextModel
} from '../models'

// other
import { PixelRatioHelper } from '../modules/PixelRatio'
import { Dimensions } from './sketchapp/dimensions'
import { StatusBar } from './sketchapp/statusBar'

const TouchableMixin = {
  componentWillUnmount() {},
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
  touchableHandleResponderGrant() {},
  touchableHandleResponderRelease() {},
  touchableHandleResponderTerminate() {},
  touchableHandleResponderMove() {}
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

const injectionAnimateModel: IInjectionAnimateModel = {
  Easing: null,
  Animated: null
}

const injectionPixelRatioModel: IInjectionPixelRatioModel = {
  PixelRatio: new PixelRatioHelper(Dimensions)
}

const injectionSystemModel: IInjectionSystemModel = {
  // System
  StatusBar,
  Dimensions,
  Platform
}

const injectionTextModel: IInjectionTextModel = {
  // Text
  TextInput: null,
  Text
}

export const allInjectionModel: IReactPrimitivesModel = Object.assign(
  injectionBaseModel,
  injectionPixelRatioModel,
  injectionSystemModel,
  injectionAnimateModel,
  injectionTextModel
)
