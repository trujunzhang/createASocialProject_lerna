const ReactPrimitives = require('../ReactPrimitives');
const {
  StatusBar,
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  ListView,
  Easing,
  Dimensions,
  // Dialog
  Modal,
  DatePickerIOS,
  DatePickerAndroid,
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} = require('react-native');

ReactPrimitives.inject({
  StatusBar,
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  Easing,
  Animated,
  Platform: {
    OS: Platform.OS,
    Version: Platform.Version,
  },
  Dimensions,
  // Dialog
  Modal,
  DatePickerIOS,
  DatePickerAndroid,
  // Touch
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Touchable: TouchableWithoutFeedback,
});
