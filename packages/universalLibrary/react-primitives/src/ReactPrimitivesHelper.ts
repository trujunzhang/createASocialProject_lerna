// TODO(lmr):
// Use getter functions on primitives to warn if injection didn't happen for an API

// TODO(lmr):
// Use getter functions + warn / throw if a non-primitive API is retrieved off of ReactPrimitivesHelper
// that looks like a react-native API

import {
  IReactPrimitivesModel,
  AllInjectionModel,
  IInjectionBaseModel,
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
  }

  constructor(allInjectionModel: IReactPrimitivesModel) {
    this.injectionBaseModel(allInjectionModel)
  }

  end(): IReactPrimitivesModel {
    return this.reactPrimitivesModel
  }
}
