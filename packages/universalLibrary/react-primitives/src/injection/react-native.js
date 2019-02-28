const ReactPrimitives = require('../ReactPrimitives');
const {
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  ListView,
  Easing,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} = require('react-native');

ReactPrimitives.inject({
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
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Touchable: TouchableWithoutFeedback,
});
