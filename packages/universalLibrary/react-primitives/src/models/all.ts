import { IInjectionBaseModel } from './base'
import { IInjectionDialogModel } from './dialog'
import { IInjectionListModel } from './list'
import { IInjectionSystemModel } from './system'
import { IInjectionTextModel } from './text'
import { IInjectionTouchModel } from './touch'

export type AllInjectionModel = IInjectionBaseModel &
    IInjectionSystemModel &
    IInjectionTextModel &
    IInjectionListModel &
    IInjectionDialogModel &
    IInjectionTouchModel
