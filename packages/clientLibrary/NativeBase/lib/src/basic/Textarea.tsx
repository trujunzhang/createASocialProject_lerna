import * as React from 'react'

import * as PropTypes from 'prop-types'
import  {ViewStyle} from  'react-primitives'
import { TextInput, TextInputProps } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import { platformVariables as variables } from '@app/native-base-variables'
import computeProps from '../utils/computeProps'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ITextareaProps extends TextInputProps {
  style?: ViewStyle | Array<ViewStyle>
  rowSpan: number
  bordered: boolean
  underline: boolean

  disabled?: any
}
class Textarea extends React.Component<ITextareaProps, any> {
  private _root: any
  private _textInput: any

  getStyle() {
    return {
      textarea: {
        height: this.props.rowSpan ? this.props.rowSpan * 25 : 60
      }
    }
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getStyle().textarea
    }
    return computeProps(this.props, defaultProps)
  }
  render() {
    return (
      <TextInput
        ref={(c) => {
          this._textInput = c
          this._root = c
        }}
        {...this.prepareRootProps()}
        multiline
        placeholderTextColor={
          this.props.placeholderTextColor
            ? this.props.placeholderTextColor
            : variables.inputColorPlaceholder()
        }
        underlineColorAndroid="rgba(0,0,0,0)"
        editable={this.props.disabled ? false : true}
      />
    )
  }
}

// Textarea.propTypes = {
// 	...TextInput.propTypes,
// 	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
// 	rowSpan: PropTypes.number,
// 	bordered: PropTypes.bool,
// 	underline: PropTypes.bool,
// };

const StyledTextarea = connectStyle('NativeBase.Textarea', {}, mapPropsToStyleNames)(Textarea)

export { StyledTextarea as Textarea }
