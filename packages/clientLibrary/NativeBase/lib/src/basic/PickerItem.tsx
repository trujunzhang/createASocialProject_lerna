import * as React from 'react'

import * as PropTypes from 'prop-types'
import { Picker, PickerItemProps } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IItemProps extends PickerItemProps {}
class Item extends React.Component<IItemProps, any> {
  private _root: any
  render() {
    return <Picker.Item ref={(c) => (this._root = c)} {...this.props} />
  }
}

// Item.propTypes = {
// 	...Picker.Item.propTypes,
// };

const StyledItem = connectStyle('NativeBase.Item', {}, mapPropsToStyleNames)(Item)

export { StyledItem as Item }
