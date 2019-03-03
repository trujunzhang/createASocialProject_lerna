// TODO(lmr):
// Use getter functions on primitives to warn if injection didn't happen for an API

// TODO(lmr):
// Use getter functions + warn / throw if a non-primitive API is retrieved off of ReactPrimitives
// that looks like a react-native API

import {
  AllInjectionModel,
  IInjectionBaseModel,
  IInjectionCustomModel,
  IInjectionTextModel,
  IInjectionListModel,
  IInjectionDialogModel,
  IInjectionTouchModel
} from './injection/IInjection'

import {
  IReactPrimitivesModel
} from './IReactPrimitives'

export class ReactPrimitives {
  private PixelRatio: any = null

  private injectionBaseModel() { }
  private injectionCustomModel() { }
  private injectionTextModel() { }
  private injectionListModel() { }
  private injectionDialogModel() { }
  private injectionTouchModel() { }

  constructor(allInjectionModel: AllInjectionModel) {

  }

  end(): IReactPrimitivesModel {

  }

}

export const RxxeactPrimitives: any = {
  PixelRatio: require('./modules/PixelRatio'),
  inject: (api) => {
    if (api.Platform) {
      ReactPrimitives.Platform.inject(api.Platform)
    }
  }
}
