import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-primitives'
import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

class Toast extends React.Component<any, any> {
  private _root: any
  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Toast.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledToast = connectStyle('NativeBase.Toast', {}, mapPropsToStyleNames)(Toast)
export { StyledToast as Toast }
