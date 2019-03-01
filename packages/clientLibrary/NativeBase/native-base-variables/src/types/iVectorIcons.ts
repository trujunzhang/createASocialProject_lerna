export interface IVectorIcons {
  AntDesign: React.ReactElement<any>
  Entypo: React.ReactElement<any>
  EvilIcons: React.ReactElement<any>
  Feather: React.ReactElement<any>
  FontAwesome: React.ReactElement<any>
  //  issue: (2019-02-27)
  //  'FontAwesome5 is not supported by @expo/vector-icons:
  //    "name": "@expo/vector-icons",
  //    "version": "9.0.0
  //
  // FontAwesome5: React.ReactElement<any>
  Foundation: React.ReactElement<any>
  Ionicons: React.ReactElement<any>
  MaterialCommunityIcons: React.ReactElement<any>
  MaterialIcons: React.ReactElement<any>
  Octicons: React.ReactElement<any>
  SimpleLineIcons: React.ReactElement<any>
  Zocial: React.ReactElement<any>
}

export type VectorIconsWithNull = IVectorIcons | null

export interface IIconVectorVariables {
  iconRenderComponents: () => VectorIconsWithNull
}
