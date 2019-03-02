// TODO(lmr):
// Use getter functions on primitives to warn if injection didn't happen for an API

// TODO(lmr):
// Use getter functions + warn / throw if a non-primitive API is retrieved off of ReactPrimitives
// that looks like a react-native API

const ReactPrimitives = {
  StyleSheet: null,
  View: null,
  Text: null,
  Image: null,
  Touchable: null,
  Easing: null,
  Animated: null,
  Dimensions: null,
  PixelRatio: require('./modules/PixelRatio'),
  Platform: require('./modules/Platform'),
  inject: (api) => {
    if (api.isIphoneX) {
      ReactPrimitives.isIphoneX = api.isIphoneX
    }
    if (api.StatusBar) {
      ReactPrimitives.StatusBar = api.StatusBar
    }
    if (api.StyleSheet) {
      ReactPrimitives.StyleSheet = api.StyleSheet
    }
    if (api.View) {
      ReactPrimitives.View = api.View
    }
    if (api.ListView) {
      ReactPrimitives.ListView = api.ListView
    }
    if (api.TextInput) {
      ReactPrimitives.TextInput = api.TextInput
    }
    if (api.Text) {
      ReactPrimitives.Text = api.Text
    }
    if (api.Image) {
      ReactPrimitives.Image = api.Image
    }
    if (api.Easing) {
      ReactPrimitives.Easing = api.Easing
    }
    if (api.Animated) {
      ReactPrimitives.Animated = api.Animated
    }
    if (api.Dimensions) {
      ReactPrimitives.Dimensions = api.Dimensions
    }
    if (api.Platform) {
      ReactPrimitives.Platform.inject(api.Platform)
    }
    // Dialog
    if (api.ActivityIndicator) {
      ReactPrimitives.ActivityIndicator = api.ActivityIndicator
    }
    if (api.Modal) {
      ReactPrimitives.Modal = api.Modal
    }
    if (api.ActionSheetIOS) {
      ReactPrimitives.ActionSheetIOS = api.ActionSheetIOS
    }
    if (api.Switch) {
      ReactPrimitives.Switch = api.Switch
    }
    if (api.Picker) {
      ReactPrimitives.Picker = api.Picker
    }
    if (api.DatePickerIOS) {
      ReactPrimitives.DatePickerIOS = api.DatePickerIOS
    }
    if (api.DatePickerAndroid) {
      ReactPrimitives.DatePickerAndroid = api.DatePickerAndroid
    }
    // Touch
    if (api.PanResponder) {
      ReactPrimitives.PanResponder = api.PanResponder
    }
    if (api.TouchableOpacity) {
      ReactPrimitives.TouchableOpacity = api.TouchableOpacity
    }
    if (api.TouchableHighlight) {
      ReactPrimitives.TouchableHighlight = api.TouchableHighlight
    }
    if (api.TouchableNativeFeedback) {
      ReactPrimitives.TouchableNativeFeedback = api.TouchableNativeFeedback
    }
    if (api.Touchable) {
      ReactPrimitives.Touchable = api.Touchable
    }
  }
}

module.exports = ReactPrimitives
