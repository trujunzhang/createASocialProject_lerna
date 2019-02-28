import * as React from 'react'
import * as ReactNative from 'react-native'
import * as PropTypes from 'prop-types'
import { TouchableOpacity, TouchableOpacityProps } from 'react-primitives'
// import IconNB from "react-native-vector-icons/Ionicons";
import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'
import { platformVariables as variable } from '@app/native-base-variables'
import { LodashUtils as _ } from '@app/tools'
import computeProps from '../utils/computeProps'

export interface ICheckBoxProps extends TouchableOpacityProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
  color?: string
  checked: boolean
}
class CheckBox extends React.Component<ICheckBoxProps, any> {
  private _root: any
  static contextTypes = {
    theme: PropTypes.object
  }

  getInitialStyle(variables) {
    return {
      checkStyle: {
        borderColor: this.props.color ? this.props.color : variables.checkboxBgColor,
        backgroundColor:
          this.props.checked === true
            ? this.props.color
              ? this.props.color
              : variables.checkboxBgColor
            : 'transparent'
      }
    }
  }

  prepareRootProps(variables) {
    const defaultProps = {
      style: this.getInitialStyle(variables).checkStyle
    }

    return computeProps(this.props, defaultProps)
  }
  renderIcon() {
    {
      /*<IconNB*/
    }
    {
      /*style={{*/
    }
    {
      /*color: this.props.checked === true ? variables.checkboxTickColor : "transparent",*/
    }
    {
      /*fontSize: variables.CheckboxFontSize,*/
    }
    {
      /*lineHeight: variables.CheckboxIconSize,*/
    }
    {
      /*marginTop: variables.CheckboxIconMarginTop,*/
    }
    {
      /*}}*/
    }
    {
      /*name={platform === "ios" && platformStyle !== "material" ? "ios-checkmark-outline" : "md-checkmark"}*/
    }
    {
      /*/>	*/
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
      <TouchableOpacity ref={(c) => (this._root = c)} {...this.prepareRootProps(variables)}>
        {this.renderIcon()}
      </TouchableOpacity>
    )
  }
}

// CheckBox.propTypes = {
// 	...TouchableOpacity.propTypes,
// 	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
// 	checked: PropTypes.bool,
// 	onPress: PropTypes.func,
// };

const StyledCheckBox = connectStyle('NativeBase.CheckBox', {}, mapPropsToStyleNames)(CheckBox)

export { StyledCheckBox as CheckBox }