import * as React from 'react'
// TODO:DJZHANG(NB)
const RNDrawer: any = null
// import RNDrawer from 'react-native-drawer'

import * as PropTypes from 'prop-types'

import { DrawerProps } from './Drawer'

export default class Drawer extends React.Component<DrawerProps, any> {
  private _root: any
  constructor(props) {
    super(props)
  }
  render() {
    return <RNDrawer ref={(c) => (this._root = c)} {...this.props} />
  }
}

;(Drawer as any).defaultProps = {
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
      elevation: 0
    }
  },
  tweenHandler: (ratio) => ({
    mainOverlay: { opacity: ratio / 2 }
  })
}
