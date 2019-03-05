import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames'

export interface IFixLeftProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}

class FixLeft extends React.Component<IFixLeftProps, any> {
  private _root: any

  render() {
    // debugger
    return <View name="fixLeft" ref={(c) => (this._root = c)} {...this.props} />
  }
}

//FixLeft.propTypes = {
//  ...ViewPropTypes,
//  style: PropTypes.oneOfType([
//    PropTypes.object,
//    PropTypes.number,
//    PropTypes.array
//  ])
//};

const StyledFixLeft = connectStyle('NativeBase.FixLeft', {}, mapPropsToStyleNames)(FixLeft)

export { StyledFixLeft as FixLeft }
