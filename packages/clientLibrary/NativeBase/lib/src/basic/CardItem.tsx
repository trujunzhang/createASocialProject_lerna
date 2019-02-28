import * as React from 'react'
import * as ReactNative from 'react-native'
import * as PropTypes from 'prop-types'
import { TouchableOpacity, View, TouchableOpacityProps } from 'react-primitives'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

export interface ICardItemProps extends TouchableOpacityProps {
  style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
  header: boolean
  cardBody: boolean
  footer: boolean
  button: boolean
}
class CardItem extends React.Component<ICardItemProps, any> {
  private _root: any
  render() {
    if (this.props.button) {
      return (
        <TouchableOpacity ref={(c) => (this._root = c)} activeOpacity={0.2} {...this.props}>
          {this.props.children}
        </TouchableOpacity>
      )
    } else {
      return (
        <View ref={(c) => (this._root = c)} {...this.props}>
          {this.props.children}
        </View>
      )
    }
  }
}

// CardItem.propTypes = {
// 	...TouchableOpacity.propTypes,
// 	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
// 	header: PropTypes.bool,
// 	cardBody: PropTypes.bool,
// 	footer: PropTypes.bool,
// 	button: PropTypes.bool,
// };

const StyledCardItem = connectStyle('NativeBase.CardItem', {}, mapPropsToStyleNames)(CardItem)

export { StyledCardItem as CardItem }
