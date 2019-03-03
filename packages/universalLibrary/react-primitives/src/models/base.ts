export interface IInjectionBaseModel {
  View: any
  Image: any
  isIphoneX: any
  StyleSheet: any
}

import { Image, StyleSheet } from 'react-native'

export { Image, StyleSheet }

export declare const isIphoneX: () => boolean
