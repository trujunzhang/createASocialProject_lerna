import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Picker } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

class Item extends React.Component<any, any> {
  private _root: any
  render() {
    const PickerItem: any = Picker.Item
    return <PickerItem ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Item.propTypes = {
// ...Picker.Item.propTypes
// }

const StyledItem = connectStyle('NativeBase.Item', {}, mapPropsToStyleNames)(Item)

export { StyledItem as Item }
