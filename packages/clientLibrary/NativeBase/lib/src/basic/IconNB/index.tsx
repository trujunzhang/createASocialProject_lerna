import * as React from 'react'
import * as PropTypes from 'prop-types'

import { Text } from 'react-primitives'

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

  render() {
    this.setIcon(this.props.type)
    const VectorIcon = this.Icon
    if (!!VectorIcon) {
      // console.log('IconNB(props), ', JSON.stringify(this.props))
      // {"type":"Ionicons","name":"ios-arrow-back","style":[{"fontSize":28,"color":"#000"},{"fontSize":25,"color":"rgba(0, 0, 0, 0.44)","marginTop":0,"marginRight":2,"marginLeft":1,"paddingTop":1}]}
      return <VectorIcon ref={(c) => (this._root = c)} {...this.props} />
    }
    const { oneStyle, fontSize, color, name } = this.props
    return <Text>{name}</Text>
  }
}

const StyledIconNB = connectStyle('NativeBase.IconNB', {}, mapPropsToStyleNames)(IconNB)

export { StyledIconNB as IconNB }
