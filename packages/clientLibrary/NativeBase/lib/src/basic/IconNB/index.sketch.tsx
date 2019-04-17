import * as React from 'react'
import * as PropTypes from 'prop-types'

import { Text, View } from 'react-primitives'

import { connectStyle } from 'native-base-shoutem-theme'

// TODO:DJZHANG(NB)
import { getVectorIcon } from '@appUtils/cacheHelper'

import { mapPropsToStyleNames } from '@app/tools'

class IconNB extends React.Component<any, any> {
  private _root: any
  private Icon: any
  static contextTypes = {
    theme: PropTypes.object
  }

  setIcon(iconType) {
    if (iconType == undefined && this.context.theme) {
      iconType = this.context.theme['@@shoutem.theme/themeStyle'].variables.iconFamily
    }

    this.Icon = getVectorIcon(iconType)
  }

  componentWillMount() {
    this.setIcon(this.props.type)
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.type && this.props.type != nextProps.type) {
      this.setIcon(nextProps.type)
    }
  }

  renderxxx() {
    const { name } = this.props
    return (
      <View>
        <Text>{name}</Text>
      </View>
    )
  }

  render() {
    this.setIcon(this.props.type)
    const VectorIcon = this.Icon
    if (!!VectorIcon) {
      const style = this.props.style
      // style.push({ // Only for debug
      //   "color": "#f00"
      // })
      const props = {
        ...this.props,
        ...{
          style
        }
      }
      // console.log('IconNB(sketch)(props), ', JSON.stringify(props))
      return <VectorIcon ref={(c) => (this._root = c)} {...props} />
    }
    const { oneStyle, fontSize, color, name } = this.props
    return <Text>{name}</Text>
  }
}

const StyledIconNB = connectStyle('NativeBase.IconNB', {}, mapPropsToStyleNames)(IconNB)

export { StyledIconNB as IconNB }
