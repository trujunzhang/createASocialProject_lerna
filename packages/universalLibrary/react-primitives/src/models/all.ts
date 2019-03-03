import { IInjectionBaseModel } from './base'
import { IInjectionAnimateModel } from './animate'
import { IInjectionDialogModel } from './dialog'
import { IInjectionListModel } from './list'
import { IInjectionSystemModel } from './system'
import { IInjectionTextModel } from './text'
import { IInjectionTouchModel } from './touch'

export type AllInjectionModel = IInjectionBaseModel &
    IInjectionSystemModel &
    IInjectionAnimateModel &
    IInjectionTextModel &
    IInjectionListModel &
    IInjectionDialogModel &
    IInjectionTouchModel
