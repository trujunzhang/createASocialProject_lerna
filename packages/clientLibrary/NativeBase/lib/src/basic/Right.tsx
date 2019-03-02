import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps,ViewStyle } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

interface IRightProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
}

class Right extends React.Component<IRightProps, any> {
  private _root: any

  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Right.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };

const StyledRight = connectStyle('NativeBase.Right', {}, mapPropsToStyleNames)(Right)

export { StyledRight as Right }
