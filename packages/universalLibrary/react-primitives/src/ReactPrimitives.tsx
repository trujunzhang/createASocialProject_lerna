// TODO(lmr):
// Use getter functions on primitives to warn if injection didn't happen for an API

// TODO(lmr):
// Use getter functions + warn / throw if a non-primitive API is retrieved off of ReactPrimitives
// that looks like a react-native API
import {
  PixelRatio
} from './modules/PixelRatio'

import {
  AllInjectionModel,
  IInjectionBaseModel,
  IInjectionCustomModel,
  IInjectionTextModel,
  IInjectionListModel,
  IInjectionDialogModel,
  IInjectionTouchModel
} from './injection/IInjection'

import { IReactPrimitivesModel } from './IReactPrimitives'

export class ReactPrimitives {
  private PixelRatio: any = null
  private reactPrimitivesModel: IReactPrimitivesModel | any = {}

  private injectionBaseModel(model: IInjectionBaseModel) {
    this.reactPrimitivesModel.View = model.View
    this.reactPrimitivesModel.Image = model.Image
    this.reactPrimitivesModel.Easing = model.Easing
    this.reactPrimitivesModel.Animated = model.Animated
    this.reactPrimitivesModel.isIphoneX = model.isIphoneX
    this.reactPrimitivesModel.StyleSheet = model.StyleSheet
    this.reactPrimitivesModel.Platform = model.Platform
  }
  private injectionCustomModel(model: IInjectionCustomModel) {
    this.reactPrimitivesModel.StatusBar = model.StatusBar
    this.reactPrimitivesModel.Dimensions = model.Dimensions
  }
  private injectionTextModel(model: IInjectionTextModel) {
    this.reactPrimitivesModel.TextInput = model.TextInput
    this.reactPrimitivesModel.Text = model.Text
  }
  private injectionListModel(model: IInjectionListModel) {

    this.reactPrimitivesModel.ListView = model.ListView
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

  constructor(allInjectionModel: AllInjectionModel) {
    this.injectionBaseModel(allInjectionModel)
    this.injectionCustomModel(allInjectionModel)
    this.injectionTextModel(allInjectionModel)
    this.injectionListModel(allInjectionModel)
    this.injectionDialogModel(allInjectionModel)
    this.injectionTouchModel(allInjectionModel)

    PixelRatio.Dimensions = allInjectionModel.Dimensions
    this.PixelRatio = PixelRatio
  }

  end(): IReactPrimitivesModel {
    return Object.assign(
      this.reactPrimitivesModel,
      {
        PixelRatio: this.PixelRatio
      }
    )
  }
}
