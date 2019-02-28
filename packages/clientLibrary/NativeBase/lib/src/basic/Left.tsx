import * as React from 'react'
import * as ReactNative from 'react-native'
import * as PropTypes from 'prop-types'
import { View, ViewProps } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ILeftProps extends ViewProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class Left extends React.Component<ILeftProps, any> {
  private _root: any

  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Left.propTypes = {
// ...ViewPropTypes,
// style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledLeft = connectStyle('NativeBase.Left', {}, mapPropsToStyleNames)(Left)

export { StyledLeft as Left }
