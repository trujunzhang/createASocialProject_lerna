import ReactPrimitives from '../ReactPrimitives'

const Animated = require('animated')
const Easing = require('animated/lib/Easing')
import {
  View,
  Text,
  Image,
  StyleSheet
  // TODO(lmr): Dimensions
} from ('react-sketchapp')

import Dimensions from './sketchapp/dimensions'
import StatusBar from './sketchapp/statusBar'

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

ReactPrimitives.inject({
  // common
  StyleSheet,
  View,
  Text,
  Image,
  Easing,
  isIphoneX: () => {
    return false
  },
  Animated: Object.assign(Animated, {
    View: Animated.createAnimatedComponent(View),
    Text: Animated.createAnimatedComponent(Text),
    Image: Animated.createAnimatedComponent(Image)
  }),
  Platform: {
    OS: 'sketch',
    Version: 1
  }
})

ReactPrimitives.inject({
  // Custom
  StatusBar,
  Dimensions
})

ReactPrimitives.inject({
  // List
  ListView: null
})

const Touchable = require('../modules/Touchable')(
  Animated,
  StyleSheet,
  ReactPrimitives.Platform,
  TouchableMixin
)

ReactPrimitives.inject({
  // Dialog
  ActivityIndicator: null,
  Modal: null,
  ActionSheetIOS: null,
  Switch: null,
  Picker: null,
  DatePickerIOS: null,
  DatePickerAndroid: null
})

ReactPrimitives.inject({
  // Touch
  PanResponder: null,
  TouchableOpacity: Touchable,
  TouchableHighlight: Touchable,
  TouchableNativeFeedback: Touchable,
  Touchable
})
