import * as React from 'react'
import { View } from 'react-primitives'
import * as PropTypes from 'prop-types'
import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'
import { ToastContainer as Toast } from '@appBasic/ToastContainer'
import { ActionSheetContainer as ActionSheet } from '@appBasic/Actionsheet'
import { Text } from '@appBasic/Text'

class Root extends React.Component<any, any> {
  private _root: any
  render() {
    return (
      <View name={'root'} ref={(c) => (this._root = c)} {...this.props} style={{ flex: 1 }}>
        {this.props.children}
        <Toast
          ref={(c) => {
            if (c) Toast.toastInstance = c
          }}
        />
        <ActionSheet
          ref={(c) => {
            if (c) ActionSheet.actionsheetInstance = c
          }}
        />
      </View>
    )
  }
}

// Root.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledRoot = connectStyle('NativeBase.Root', {}, mapPropsToStyleNames)(Root)

export { StyledRoot as Root }
