import * as React from 'react'

import * as PropTypes from 'prop-types'
import { ViewStyle, StyleSheet } from 'react-primitives'
import { View, Text as RNText, TextProps } from 'react-primitives'
import { LodashUtils as _ } from '@app/tools'

import { connectStyle } from '@app/native-base-shoutem-theme'
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames'

export interface ITextProps extends TextProps {
  style?: ViewStyle | Array<ViewStyle>
  uppercase: boolean
}
class Text extends React.Component<ITextProps, any> {
  private _root: any

  render() {
    const { uppercase, children, style } = this.props

    let text
    if (uppercase) {
      text = React.Children.map(children, (child) => {
        if (_.isString(child)) {
          return _.toUpper(child)
        } else {
          return child
        }
      })
    } else {
      text = children
    }

    const nextStyle: any = StyleSheet.flatten(style)
    let nextProps: ITextProps = _.clone(this.props)
    nextProps.style = nextStyle

    /* console.log('next style: ', JSON.stringify(style)) */

    const textStyle = {
      fontSize: nextStyle.fontSize,
      fontFamily: nextStyle.fontFsmily,
      fontWeight: nextStyle.fontWeight,
      color: nextStyle.color
    }

    /* console.log('text style: ', JSON.stringify(textStyle)) */

    return (
      <View ref={(c) => (this._root = c)} style={nextStyle}>
        <RNText style={textStyle}>{text}</RNText>
      </View>
    )
  }
}

//Text.propTypes = {
// ...RNText.propTypes,
// uppercase: PropTypes.bool,
// style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//};

;(Text as any).defaultProps = {
  uppercase: false
}

const StyledText = connectStyle('NativeBase.Text', {}, mapPropsToStyleNames)(Text)

export { StyledText as Text }
