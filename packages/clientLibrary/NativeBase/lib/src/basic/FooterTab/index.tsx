import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

class FooterTab extends React.Component<any, any> {
  private _root: any
  render() {
    return (
      <View ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

// FooterTab.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledFooterTab = connectStyle('NativeBase.FooterTab', {}, mapPropsToStyleNames)(FooterTab)

export { StyledFooterTab as FooterTab }
