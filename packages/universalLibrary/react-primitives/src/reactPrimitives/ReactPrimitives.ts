// TODO(lmr):
// Use getter functions on primitives to warn if injection didn't happen for an API

// TODO(lmr):
// Use getter functions + warn / throw if a non-primitive API is retrieved off of ReactPrimitives
// that looks like a react-native API

import {
  IReactPrimitivesModel,
  AllInjectionModel,
  IInjectionBaseModel,
  IInjectionAnimateModel,
  IInjectionPixelRatioModel,
  IInjectionSystemModel,
  IInjectionTextModel,
  IInjectionListModel,
  IInjectionDialogModel,
  IInjectionTouchModel
} from '../models'


export class ReactPrimitives {
  private PixelRatio: any = null
  private reactPrimitivesModel: IReactPrimitivesModel | any = {}

  private injectionBaseModel(model: IInjectionBaseModel) {
    this.reactPrimitivesModel.View = model.View
    this.reactPrimitivesModel.Image = model.Image
    this.reactPrimitivesModel.isIphoneX = model.isIphoneX
    this.reactPrimitivesModel.StyleSheet = model.StyleSheet
  }
  private injectionAnimateModel(model: IInjectionAnimateModel) {
    this.reactPrimitivesModel.Easing = model.Easing
    this.reactPrimitivesModel.Animated = model.Animated
  }
  private injectionPixelRatioModel(model: IInjectionPixelRatioModel) {
    this.reactPrimitivesModel.PixelRatio = model.PixelRatio
  }
  private injectionSystemModel(model: IInjectionSystemModel) {
    this.reactPrimitivesModel.StatusBar = model.StatusBar
    this.reactPrimitivesModel.Dimensions = model.Dimensions
    this.reactPrimitivesModel.Platform = model.Platform
  }
  private injectionTextModel(model: IInjectionTextModel) {
    this.reactPrimitivesModel.TextInput = model.TextInput
    this.reactPrimitivesModel.Text = model.Text
  }
  private injectionListModel(model: IInjectionListModel) {
    this.reactPrimitivesModel.KeyboardAwareScrollView = model.KeyboardAwareScrollView
    this.reactPrimitivesModel.ScrollView = model.ScrollView
    this.reactPrimitivesModel.ListView = model.ListView
    this.reactPrimitivesModel.FlatList = model.FlatList
  }
  private injectionDialogModel(model: IInjectionDialogModel) {
    this.reactPrimitivesModel.ActivityIndicator = model.ActivityIndicator
    this.reactPrimitivesModel.Modal = model.Modal
    this.reactPrimitivesModel.ActionSheetIOS = model.ActionSheetIOS
    this.reactPrimitivesModel.Switch = model.Switch
    this.reactPrimitivesModel.Picker = model.Picker
    this.reactPrimitivesModel.DatePickerIOS = model.DatePickerIOS
    this.reactPrimitivesModel.DatePickerAndroid = model.DatePickerAndroid
  }

  private injectionTouchModel(model: IInjectionTouchModel) {
    this.reactPrimitivesModel.PanResponder = model.PanResponder
    this.reactPrimitivesModel.TouchableOpacity = model.TouchableOpacity
    this.reactPrimitivesModel.TouchableHighlight = model.TouchableHighlight
    this.reactPrimitivesModel.TouchableNativeFeedback = model.TouchableNativeFeedback
    this.reactPrimitivesModel.Touchable = model.Touchable
  }

  constructor(allInjectionModel: IReactPrimitivesModel) {
    this.injectionBaseModel(allInjectionModel)
    this.injectionAnimateModel(allInjectionModel)
    this.injectionPixelRatioModel(allInjectionModel)
    this.injectionSystemModel(allInjectionModel)
    this.injectionTextModel(allInjectionModel)
    this.injectionListModel(allInjectionModel)
    this.injectionDialogModel(allInjectionModel)
    this.injectionTouchModel(allInjectionModel)
  }

  end(): IReactPrimitivesModel {
    return this.reactPrimitivesModel
  }
}
