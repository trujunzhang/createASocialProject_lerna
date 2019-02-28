import * as React from 'react'
import * as ReactNative from 'react-native'
import * as PropTypes from 'prop-types'

import { platformVariables as variable } from '@app/native-base-variables'
import { LodashUtils as _ } from '@app/tools'

import { connectStyle } from '@app/native-base-shoutem-theme'

// import Ionicons from "react-native-vector-icons/Ionicons";
// import Entypo from "react-native-vector-icons/Entypo";
// import Feather from "react-native-vector-icons/Feather";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Foundation from "react-native-vector-icons/Foundation";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Octicons from "react-native-vector-icons/Octicons";
// import Zocial from "react-native-vector-icons/Zocial";
// import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
// import EvilIcons from "react-native-vector-icons/EvilIcons";

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IIconNBProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle> | any
  iconSize: number
  iconColor: string
  type: string
  name: string
}
class IconNB extends React.Component<IIconNBProps, any> {
  private _root: any
  private Icon: any
  static contextTypes = {
    theme: PropTypes.object
  }

  setIcon(iconType) {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    if (iconType == undefined && this.context.theme) {
      iconType = variables.iconFamily
    }
    const icons = variables.iconRenderComponents()

    // console.log('iconType: ', iconType)

    this.Icon = icons[iconType]
  }

  componentWillMount() {
    this.setIcon(this.props.type)
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.type && this.props.type != nextProps.type) {
      this.setIcon(nextProps.type)
    }
  }

  getIconStyle() {
    const { name, iconSize, iconColor } = this.props
    const oneStyle = Object.assign({}, ...this.props.style)
    const { fontSize, color } = oneStyle
    delete oneStyle.fontSize
    delete oneStyle.color
    delete oneStyle.getIcon
    return {
      oneStyle,
      fontSize: !!iconSize ? iconSize : fontSize,
      color: !!iconColor ? iconColor : color,
      name
    }
  }

  render() {
    const VectorIcon = this.Icon
    const { oneStyle, fontSize, color, name } = this.getIconStyle()
    if (name === 'search') {
      // debugger
    }
    return (
      <VectorIcon
        ref={(c) => (this._root = c)}
        name={name}
        size={fontSize}
        color={color}
        style={oneStyle}
      />
    )
  }
}

// IconNB.propTypes = {
//   iconSize: PropTypes.number,
//   iconColor: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   type: PropTypes.oneOf([
//     'Entypo',
//     'EvilIcons',
//     'Feather',
//     'FontAwesome',
//     'Foundation',
//     'Ionicons',
//     'MaterialCommunityIcons',
//     'MaterialIcons',
//     'Octicons',
//     'SimpleLineIcons',
//     'Zocial'
//   ])
// }

const StyledIconNB = connectStyle('NativeBase.IconNB', {}, mapPropsToStyleNames)(IconNB)

export { StyledIconNB as IconNB }
