import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Switch as SwitchNB } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

class Switch extends React.Component<any, any> {
  private _root: any
  render() {
    return <SwitchNB ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Switch.propTypes = {
//   ...Switch.propTypes
// }

const StyledSwitch = connectStyle('NativeBase.Switch', {}, mapPropsToStyleNames)(Switch)

export { StyledSwitch as Switch }
