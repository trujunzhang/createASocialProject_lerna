import * as React from 'react'
import * as ReactNative from 'react-native'
import { Switch as SwitchNB, SwitchProps } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ISwitchProps extends SwitchProps {}
class Switch extends React.Component<ISwitchProps, any> {
  private _root: any

  render() {
    return <SwitchNB ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Switch.propTypes = {
// 	...Switch.propTypes,
// };

const StyledSwitch = connectStyle('NativeBase.Switch', {}, mapPropsToStyleNames)(Switch)

export { StyledSwitch as Switch }
