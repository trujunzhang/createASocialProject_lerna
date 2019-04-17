import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View as RNView } from 'react-primitives'
import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'
import { StyleFixer } from '@appUtils/styleFixer'

import { ViewNBProps } from './View'

class ViewNB extends React.Component<ViewNBProps, any> {
  private _root: any
  render() {
    const props = StyleFixer.flatten(this.props)
    return <RNView ref={(c) => (this._root = c)} {...props} />
  }
}

// ViewNB.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledViewNB = connectStyle('NativeBase.ViewNB', {}, mapPropsToStyleNames)(ViewNB)

export const View = StyledViewNB

export { StyledViewNB as ViewNB }
