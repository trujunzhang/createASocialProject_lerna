import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

class Tab extends React.Component<any, any> {
  private _root: any
  render() {
    return (
      <View ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

// Tab.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledTab = connectStyle('NativeBase.Tab', {}, mapPropsToStyleNames)(Tab)

export { StyledTab as Tab }
