// TODO(lmr):
// Use getter functions on primitives to warn if injection didn't happen for an API

// TODO(lmr):
// Use getter functions + warn / throw if a non-primitive API is retrieved off of ReactPrimitivesHelper
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
} from './models'

export class ReactPrimitivesHelper {
  private PixelRatio: any = null
  private reactPrimitivesModel: IReactPrimitivesModel | any = {}

  private injectionBaseModel(model: IInjectionBaseModel) {
    this.reactPrimitivesModel.View = model.View
    this.reactPrimitivesModel.Image = model.Image
    this.reactPrimitivesModel.isIphoneX = model.isIphoneX
    // this.reactPrimitivesModel.StyleSheet = model.StyleSheet
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

  constructor(allInjectionModel: IReactPrimitivesModel) {
    this.injectionBaseModel(allInjectionModel)
    this.injectionAnimateModel(allInjectionModel)
    this.injectionPixelRatioModel(allInjectionModel)
    this.injectionSystemModel(allInjectionModel)
    this.injectionTextModel(allInjectionModel)
  }

  end(): IReactPrimitivesModel {
    return this.reactPrimitivesModel
  }
}
