import { View, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-primitives'

export interface IRowProps extends TouchableOpacityProps {
  style?: any
  size?: number
}

export interface IGridProps extends TouchableOpacityProps {
  style?: any
}

export interface IColProps extends TouchableOpacityProps {
  style?: any
  size?: number
}
