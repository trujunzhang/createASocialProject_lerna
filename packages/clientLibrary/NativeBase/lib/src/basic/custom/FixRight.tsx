import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps, ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames'

export interface IFixRightProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}

class FixRight extends React.Component<IFixRightProps, any> {
  private _root: any

  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

//FixRight.propTypes = {
//  ...ViewPropTypes,
//  style: PropTypes.oneOfType([
//    PropTypes.object,
//    PropTypes.number,
//    PropTypes.array
//  ])
//};

const StyledFixRight = connectStyle('NativeBase.FixRight', {}, mapPropsToStyleNames)(FixRight)

export { StyledFixRight as FixRight }
