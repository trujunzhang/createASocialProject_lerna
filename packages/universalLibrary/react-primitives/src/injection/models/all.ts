import { IInjectionBaseModel } from './base'
import { IInjectionDialogModel } from './dialog'
import { IInjectionListModel } from './list'
import { IInjectionCustomModel } from './system'
import { IInjectionTextModel } from './text'
import { IInjectionTouchModel } from './touch'

export type AllInjectionModel = IInjectionBaseModel &
    IInjectionCustomModel &
    IInjectionTextModel &
    IInjectionListModel &
    IInjectionDialogModel &
    IInjectionTouchModel
