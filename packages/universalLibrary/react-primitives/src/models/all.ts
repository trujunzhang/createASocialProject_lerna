import { IInjectionBaseModel } from './base'
import { IInjectionDialogModel } from './dialog'
import { IInjectionListModel } from './list'
import { IInjectionTextModel } from './text'
import { IInjectionTouchModel } from './touch'

export type AllInjectionModel = IInjectionBaseModel & IInjectionTextModel
