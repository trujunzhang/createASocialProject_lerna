import * as React from 'react'
import * as PropTypes from 'prop-types'
import { View } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'
import { ToastContainer as Toast } from '@appBasic/ToastContainer'
import { ActionSheetContainer as ActionSheet } from '@appBasic/Actionsheet'
import { Text } from '@appBasic/Text'

class Container extends React.Component<any, any> {
  private _root: any
  render() {
    return (
      <View name={'container'} ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </View>
    )
  }
}

// Container.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledContainer = connectStyle('NativeBase.Container', {}, mapPropsToStyleNames)(Container)

export { StyledContainer as Container }
