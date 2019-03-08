import { Animated, View, TextInput, Text, Image, Easing } from 'react-native'

import {
  IReactPrimitivesModel,
  IInjectionBaseModel,
  IInjectionTextModel
} from '../models'

const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image
}

const injectionTextModel: IInjectionTextModel = {
  // Text
  TextInput,
  Text
}

export const allInjectionModel: IReactPrimitivesModel = Object.assign(
  injectionBaseModel,
  injectionTextModel
)
