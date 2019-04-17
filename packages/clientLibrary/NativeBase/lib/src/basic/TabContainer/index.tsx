import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-primitives'
import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

class TabContainer extends React.Component<any, any> {
  private _root: any
  render() {
    return <View ref={(c) => (this._root = c)} {...this.props} />
  }
}

// TabContainer.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledTabContainer = connectStyle('NativeBase.TabContainer', {}, mapPropsToStyleNames)(
  TabContainer
)
export { StyledTabContainer as TabContainer }
