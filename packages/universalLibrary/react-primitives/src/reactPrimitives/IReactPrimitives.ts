import {
  AllInjectionModel,
  IInjectionBaseModel,
  IInjectionCustomModel,
  IInjectionTextModel,
  IInjectionListModel,
  IInjectionDialogModel,
  IInjectionTouchModel
} from '../injection/models'

export interface IReactPrimitivesModel extends AllInjectionModel {
  PixelRatio: any
}
