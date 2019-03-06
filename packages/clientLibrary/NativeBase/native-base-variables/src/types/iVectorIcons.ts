import { Icon } from 'react-native-vector-icons/Icon'

export interface IVectorIcons {
  AntDesign: Icon | any
  Entypo: Icon | any
  EvilIcons: Icon | any
  Feather: Icon | any
  FontAwesome: Icon | any
  //  issue: (2019-02-27)
  //  'FontAwesome5 is not supported by @expo/vector-icons:
  //    "name": "@expo/vector-icons",
  //    "version": "9.0.0
  //
  // FontAwesome5:Icon | any
  Foundation: Icon | any
  Ionicons: Icon | any
  MaterialCommunityIcons: Icon | any
  MaterialIcons: Icon | any
  Octicons: Icon | any
  SimpleLineIcons: Icon | any
  Zocial: Icon | any
}

export type VectorIconsWithNull = IVectorIcons | null

export interface IIconVectorVariables {
  iconRenderComponents: () => VectorIconsWithNull
}
