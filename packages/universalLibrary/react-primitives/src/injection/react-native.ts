import { Animated, View, TextInput, Text, Image, Easing } from 'react-native'

import { IReactPrimitivesModel, IInjectionBaseModel } from '../models'

const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image
}

export const allInjectionModel: IReactPrimitivesModel = Object.assign(injectionBaseModel)
