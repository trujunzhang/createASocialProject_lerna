const ReactPrimitives = require('../ReactPrimitives')
import {
  StatusBar,
  Animated,
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Platform,
  ListView,
  Easing,
  Dimensions,
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
} from ('react-native')

import { isIphoneX } from 'react-native-iphone-x-helper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

ReactPrimitives.inject({
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  Easing,
  Animated,
  isIphoneX,
  Platform: {
    OS: Platform.OS,
    Version: Platform.Version
  }
})

ReactPrimitives.inject({
  // Custom
  StatusBar,
  Dimensions
})

ReactPrimitives.inject({
  // List
  ListView
})

ReactPrimitives.inject({
  // Dialog
  ActivityIndicator,
  Modal,
  ActionSheetIOS,
  Switch,
  Picker,
  DatePickerIOS,
  DatePickerAndroid
})

ReactPrimitives.inject({
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Touchable: TouchableWithoutFeedback
})
