export interface IVectorIcons {
  AntDesign: string
  Entypo: string
  EvilIcons: string
  Feather: string
  FontAwesome: string
  //  issue: (2019-02-27)
  //  'FontAwesome5 is not supported by @expo/vector-icons:
  //    "name": "@expo/vector-icons",
  //    "version": "9.0.0
  //
  // FontAwesome5: string
  Foundation: string
  Ionicons: string
  MaterialCommunityIcons: string
  MaterialIcons: string
  Octicons: string
  SimpleLineIcons: string
  Zocial: string
}

export interface IIconVectorVariables {
  iconRenderComponents: () => IVectorIcons
}
