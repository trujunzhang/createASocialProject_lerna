export interface IInjectionBaseModel {
  StyleSheet: any
  View: any
  TextInput: any
  Text: any
  Image: any
  Easing: any
  Animated: any
  isIphoneX: any
  Platform: any
}

export interface IInjectionCustomModel {
  // Custom
  StatusBar: any
  Dimensions: any
}

export interface IInjectionListModel {
  // List
  ListView: any
}

export interface IInjectionDialogModel {
  // Dialog
  ActivityIndicator: any
  Modal: any
  ActionSheetIOS: any
  Switch: any
  Picker: any
  DatePickerIOS: any
  DatePickerAndroid: any
}
export interface IInjectionTouchModel {
  // Touch
  PanResponder: any
  TouchableOpacity: any
  TouchableHighlight: any
  TouchableNativeFeedback: any
  Touchable: any
}

export type AllInjectionModel =
  & IInjectionBaseModel
  & IInjectionCustomModel
  & IInjectionListModel
  & IInjectionDialogModel
  & IInjectionTouchModel
