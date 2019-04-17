import * as React from 'react'

/**
 * see Widget Icon.js
 */
export interface IconProps {
  name?: string
  type?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial'
  // TODO position attribute of ReactNative.FlexStyle hasn't another position values without "absolute" and "relative"
  style?: any
  onPress?: (e?: any) => any
  active?: boolean
  ios?: string
  android?: string
  color?: string
  fontSize?: number
  // Others
  iconSize?: number
  iconColor?: string
}
