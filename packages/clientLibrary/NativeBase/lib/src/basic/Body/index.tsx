import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

import { BodyProps } from './Body'

class Body extends React.Component<BodyProps, any> {
  private _root: any
  render() {
    return <View name={'body'} ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Body.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledBody = connectStyle('NativeBase.Body', {}, mapPropsToStyleNames)(Body)

export { StyledBody as Body }
