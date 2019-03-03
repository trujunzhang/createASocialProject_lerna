export interface IInjectionBaseModel {
  View: any
  Image: any
  Easing: any
  Animated: any
  isIphoneX: any
  StyleSheet: any
}

import { Image, Animated, StyleSheet } from 'react-native'

export { Image, Animated, StyleSheet }

export declare const isIphoneX: () => boolean
