// import Animated from 'animated'
// import Animated from 'animated/lib/targets/react-dom';
// import Easing from 'animated/lib/Easing'
import {
  View,
  Text,
  Image
  // TODO(lmr): Dimensions
} from 'react-sketchapp'

import { IReactPrimitivesModel, IInjectionBaseModel, IInjectionTextModel } from '../models'

const injectionBaseModel: IInjectionBaseModel = {
  View,
  Image
}

const injectionTextModel: IInjectionTextModel = {
  // Text
  Text
}

export const allInjectionModel: IReactPrimitivesModel = Object.assign(
  injectionBaseModel,
  injectionTextModel
)
