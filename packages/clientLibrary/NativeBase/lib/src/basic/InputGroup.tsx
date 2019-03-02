import * as React from 'react'

import * as PropTypes from 'prop-types'
import { View, ViewProps,ViewStyle } from 'react-primitives'

import { platformVariables as variables } from '@app/native-base-variables'
import { connectStyle } from '@app/native-base-shoutem-theme'
import computeProps from '../utils/computeProps'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IInputGroupProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
  /**
   * Wraps the textbox with predefined border options.
   * Default: underline
   */
  borderType?: 'rounded' | 'regular' | 'underline'
  toolbar?: boolean
  atoolbar?: boolean
  /**
   * If true, the icon in the input text box appears to the right.
   * Default: true
   */
  iconRight?: boolean
  /**
   * The border color of textbox for valid input.
   */
  success?: boolean
  /**
   * The border color of textbox for invalid input.
   */
  error?: boolean
  /**
   * Disables inputting data.
   */
  disabled?: boolean
  regular?: boolean
  underline?: boolean
  rounded?: boolean
}
class InputGroup extends React.Component<IInputGroupProps, any> {
  private _root: any
  getInitialStyle() {
    return {
      roundedInputGroup: {
        borderWidth: this.props.rounded ? 1 : undefined,
        borderRadius: this.props.rounded ? variables.inputGroupRoundedBorderRadius : undefined
      }
    }
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().roundedInputGroup
    }

    return computeProps(this.props, defaultProps)
  }
  render() {
    return (
      <View ref={(c) => (this._root = c)} {...this.prepareRootProps()}>
        {this.props.children}
      </View>
    )
  }
}

// InputGroup.propTypes = {
//   ...ViewPropTypes,
//   regular: PropTypes.bool,
//   underline: PropTypes.bool,
//   rounded: PropTypes.bool,
//   success: PropTypes.bool,
//   error: PropTypes.bool,
//   disabled: PropTypes.bool
// };

const StyledInputGroup = connectStyle('NativeBase.InputGroup', {}, mapPropsToStyleNames)(InputGroup)

export { StyledInputGroup as InputGroup }
