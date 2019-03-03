import * as React from 'react'

export interface IInjectionTouchModel {
  // Touch
  PanResponder: any
  TouchableOpacity: any
  TouchableHighlight: any
  TouchableNativeFeedback: any
  Touchable: any
}

import {
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacityProps,
  TouchableWithoutFeedback
} from 'react-native'

// export const Touchable  = React.ComponentType<TouchableOpacityProps>

export declare const Touchable: any

export {
  PanResponder,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
}
