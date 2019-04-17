import * as ExpoVectorIcons from '@expo/vector-icons'

const {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  // FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
} = ExpoVectorIcons

import {
  setCachDict,
  CACHE_VECTOR_ICONS,
  VectorIconsDictWithNull,
  IVectorIconsDict
} from '@app/tools'

const vectorIcons: IVectorIconsDict = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  // FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
}

export const setVectorIconsCachDict = () => {
  setCachDict(CACHE_VECTOR_ICONS, vectorIcons)
}
