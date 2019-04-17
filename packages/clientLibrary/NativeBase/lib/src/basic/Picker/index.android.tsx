import * as React from 'react'
import * as PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import { Picker as RNPicker } from 'react-primitives'
import { connectStyle } from 'native-base-shoutem-theme'
import { mapPropsToStyleNames } from '@app/tools'

export default class PickerNB extends React.Component<any, any> {
  private _root: any
  render() {
    return (
      <RNPicker ref={(c) => (this._root = c)} {...this.props}>
        {this.props.children}
      </RNPicker>
    )
  }
}

const StyledPickerNB = connectStyle('NativeBase.PickerNB', {}, mapPropsToStyleNames)(PickerNB)

const Picker: any = StyledPickerNB
Picker.Item = createReactClass({
  render() {
    return <Picker.Item {...this.props} />
  }
})

// PickerNB.propTypes = {
//   ...Picker.propTypes
// }

// export { StyledPickerNB as PickerNB }
export { Picker }