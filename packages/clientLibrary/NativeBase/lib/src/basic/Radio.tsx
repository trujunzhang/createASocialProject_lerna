import * as React from 'react'

import * as PropTypes from 'prop-types'
import { TouchableOpacity, Platform, TouchableOpacityProps } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'
import  {ViewStyle} from  'react-primitives'
import { platformVariables as variable } from '@app/native-base-variables'
import computeProps from '../utils/computeProps'

export interface IRadioProps extends TouchableOpacityProps {
  style?: ViewStyle | Array<ViewStyle>
  selected: boolean
  standardStyle: boolean
}

class Radio extends React.Component<IRadioProps, any> {
  private _root: any
  static contextTypes = {
    theme: PropTypes.object
  }

  prepareRootProps() {
    const defaultProps = {
      standardStyle: false
    }

    return computeProps(this.props, defaultProps)
  }

  renderIcon() {
    {
      /*<Icon*/
    }
    {
      /*style={{*/
    }
    {
      /*color: this.props.selectedColor*/
    }
    {
      /*? this.props.selectedColor*/
    }
    {
      /*: variables.radioColor(),*/
    }
    {
      /*lineHeight: 25,*/
    }
    {
      /*height: 20,*/
    }
    {
      /*fontSize: variables.radioBtnSize*/
    }
    {
      /*}}*/
    }
    {
      /*name="ios-checkmark"*/
    }
    {
      /*/> */
    }
    {
      /*<Icon*/
    }
    {
      /*style={{*/
    }
    {
      /*color:*/
    }
    {
      /*Platform.OS === "ios"*/
    }
    {
      /*? this.props.selected*/
    }
    {
      /*? this.props.selectedColor*/
    }
    {
      /*? this.props.selectedColor*/
    }
    {
      /*: variables.radioColor()*/
    }
    {
      /*: this.props.color*/
    }
    {
      /*? this.props.color*/
    }
    {
      /*: undefined*/
    }
    {
      /*: this.props.selected*/
    }
    {
      /*? this.props.selectedColor*/
    }
    {
      /*? this.props.selectedColor*/
    }
    {
      /*: variables.radioSelectedColorAndroid*/
    }
    {
      /*: this.props.color*/
    }
    {
      /*? this.props.color*/
    }
    {
      /*: undefined,*/
    }
    {
      /*lineHeight: variables.radioBtnLineHeight,*/
    }
    {
      /*fontSize: variables.radioBtnSize*/
    }
    {
      /*}}*/
    }
    {
      /*name={*/
    }
    {
      /*Platform.OS === "ios"*/
    }
    {
      /*? this.props.selected*/
    }
    {
      /*? "ios-radio-button-on"*/
    }
    {
      /*: "ios-radio-button-off"*/
    }
    {
      /*: this.props.selected*/
    }
    {
      /*? "md-radio-button-on"*/
    }
    {
      /*: "md-radio-button-off"*/
    }
    {
      /*}*/
    }
    {
      /*/>*/
    }
    return null
  }

  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    const platformStyle = variables.platformStyle
    const platform = variables.platform

    return (
      <TouchableOpacity ref={(c) => (this._root = c)} {...this.prepareRootProps()}>
        {Platform.OS === 'ios' && !this.props.standardStyle
          ? this.props.selected && this.renderIcon()
          : this.renderIcon()}
      </TouchableOpacity>
    )
  }
}

// Radio.propTypes = {
//     ...TouchableOpacity.propTypes,
//     selected: PropTypes.bool,
//     standardStyle: PropTypes.bool
// };

const StyledRadio = connectStyle('NativeBase.Radio', {}, mapPropsToStyleNames)(Radio)

export { StyledRadio as Radio }
