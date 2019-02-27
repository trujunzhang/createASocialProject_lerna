const ReactPrimitives = require('../ReactPrimitives');
const {
  Animated,
  StyleSheet,
  View,
  ListView,
  Text,
  Image,
  Platform,
  TouchableWithoutFeedback,
  Dimensions,
  Easing,
} = require('react-native-web');

// TODO: figure out a more appropriate way to get StyleSheet.resolve, or potentially remove the
// API alltogether.
function getDefault(m) {
  return m.__esModule === true ? m.default : m;
}
const StyleRegistry = getDefault(require('react-native-web/dist/cjs/exports/StyleSheet/ReactNativeStyleResolver'));

const emptyObject = {};

const resolve = style => {
  return StyleRegistry.resolve(style) || emptyObject;
};

ReactPrimitives.inject({
  View,
  ListView,
  Text,
  Image,
  Easing,
  Animated,
  StyleSheet: Object.assign(
    StyleSheet,
    { resolve }
  ),
  Platform: {
    OS: Platform.OS,
    Version: Platform.Version,
  },
  Dimensions,
  Touchable: TouchableWithoutFeedback,
});
