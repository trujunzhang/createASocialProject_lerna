import * as React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import { platformVariables as variable } from '@app/native-base-variables'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'
import NativeBaseComponent from './Base/NativeBaseComponent'

export interface IProps extends ViewProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class Input extends NativeBaseComponent {
  private _root: any
  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    return (
      <TextInput
        t
        ref={(c) => {
          this._textInput = c
          this._root = c
        }}
        editable={this.props.disabled ? false : true}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor={
          this.props.placeholderTextColor
            ? this.props.placeholderTextColor
            : variables.inputColorPlaceholder()
        }
        {...this.props}
      />
    )
  }
}

// Input.propTypes = {
//   ...TextInput.propTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }

const StyledInput = connectStyle('NativeBase.Input', {}, mapPropsToStyleNames)(Input)

export { StyledInput as Input }
