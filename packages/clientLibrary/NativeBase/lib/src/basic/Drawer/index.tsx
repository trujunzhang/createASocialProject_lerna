import * as React from 'react'

import * as ReactNative from 'react-native'
import { View, ViewProps } from 'react-primitives'

// import RNDrawer from "react-native-drawer";

/**
 * vendor react-native-drawer
 */
export interface IDrawerStyles {
  drawer?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
  main?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
  drawerOverlay?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
  mainOverlay?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}

export interface IDrawerProps {
  acceptDoubleTap?: boolean
  acceptPan?: boolean
  acceptTap?: boolean
  captureGestures?: boolean
  children?: any
  open?: boolean
  closedDrawerOffset?: number
  content?: any
  deviceScreen?: ReactNative.ScaledSize
  disabled?: boolean
  initializeOpen?: boolean
  negotiatePan?: boolean
  onClose?: Function
  onCloseStart?: Function
  onOpen?: Function
  onOpenStart?: Function
  openDrawerOffset?: number
  openDrawerThreshold?: number
  panCloseMask?: number
  panOpenMask?: number
  panStartCompensation?: boolean
  relativeDrag?: boolean
  side?: 'left' | 'right'
  styles?: IDrawerStyles
  tapToClose?: boolean
  tweenDuration?: number
  tweenEasing?: string
  tweenHandler?: Function
  type?: 'overlay' | 'static' | 'displace'
}

export default class Drawer extends React.Component<IDrawerProps, any> {
  constructor(props) {
    super(props)
  }
  render() {
    // return <RNDrawer ref={c => (this._root = c)} {...this.props} />;
    return null
  }
}

Drawer.defaultProps = {
  type: 'overlay',
  tapToClose: true,
  openDrawerOffset: 0.2,
  panCloseMask: 0.2,
  closedDrawerOffset: 0,
  styles: {
    drawer: {
      shadowColor: '#000000',
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 5
    },
    mainOverlay: {
      opacity: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      elevation: 8
    }
  },
  tweenHandler: (ratio) => ({
    mainOverlay: { opacity: ratio / 2 }
  })
}
