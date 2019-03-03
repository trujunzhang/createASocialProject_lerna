import {
  AllInjectionModel,
  IInjectionBaseModel,
  IInjectionCustomModel,
  IInjectionTextModel,
  IInjectionListModel,
  IInjectionDialogModel,
  IInjectionTouchModel
} from './injection/IInjection'

export interface IReactPrimitivesModel extends AllInjectionModel {
  PixelRatio: any
}
