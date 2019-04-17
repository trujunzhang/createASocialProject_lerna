import {
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
} from '@app/react-sketch-vector-icons'

import {
  setCachDict,
  CACHE_VECTOR_ICONS,
  VectorIconsDictWithNull,
  IVectorIconsDict
} from '@app/tools'

export const vectorIcons: IVectorIconsDict = {
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
