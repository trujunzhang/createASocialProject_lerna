import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Text } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

class Label extends React.Component<any, any> {
  private _root: any
  render() {
    return <Text ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Label.propTypes = {
//   ...Text.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledLabel = connectStyle('NativeBase.Label', {}, mapPropsToStyleNames)(Label)

export { StyledLabel as Label }
