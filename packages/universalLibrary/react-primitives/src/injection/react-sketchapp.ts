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
  IInjectionAnimateModel,
  IInjectionTextModel
} from '../models'


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

const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image,
}

const injectionAnimateModel: IInjectionAnimateModel = {
  Easing: null,
  Animated: null
}

const injectionTextModel: IInjectionTextModel = {
  // Text
  TextInput: null,
  Text
}

export const allInjectionModel: IReactPrimitivesModel = Object.assign(
  injectionBaseModel,
  injectionAnimateModel,
  injectionTextModel
)
