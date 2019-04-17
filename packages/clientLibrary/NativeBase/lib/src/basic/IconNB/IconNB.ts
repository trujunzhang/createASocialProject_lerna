import * as React from 'react'

export type IconNBStyle = Object | number | any[]

export type IconNBType =
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

export interface IconNBProps {
  style?: IconNBStyle
  type?: IconNBType
  // Others
  name: string
}
