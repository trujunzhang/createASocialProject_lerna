import * as React from 'react'

import * as PropTypes from 'prop-types'

import {
  platformVariables as variable,
  themeVariablesWithIconVector,
  VectorIconsWithNull
} from '@app/native-base-variables'
import { LodashUtils as _ } from '@app/tools'

import { Text } from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface IIconNBProps {
  style?: ViewStyle | Array<ViewStyle> | any
  iconSize: number
  iconColor: string
  type: string
  name: string
}
class IconNB extends React.Component<IIconNBProps, any> {
  private _root: any
  private Icon: React.Component<any> | null = null

  static contextTypes = {
    theme: PropTypes.object
  }

  setIcon(iconType: string) {
    const variables: themeVariablesWithIconVector = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    if (iconType == undefined && this.context.theme) {
      iconType = variables.iconFamily
    }
    const icons: VectorIconsWithNull = variables.iconRenderComponents()

    // console.log('iconType: ', iconType)
    if (!!icons) {
      this.Icon = icons[iconType]
    }
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
    const VectorIcon: any | null = this.Icon
    const { oneStyle, fontSize, color, name } = this.getIconStyle()
    if (name === 'search') {
      // debugger
    }
    if (!!VectorIcon) {
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
    return <Text>{name}</Text>
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
