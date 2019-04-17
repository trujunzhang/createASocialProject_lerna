import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

class Right extends React.Component<any, any> {
  private _root: any
  render() {
    return <View name={'right'} ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Right.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledRight = connectStyle('NativeBase.Right', {}, mapPropsToStyleNames)(Right)

export { StyledRight as Right }
