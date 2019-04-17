import { TouchableOpacityProps } from '../../../typings'

import * as React from 'react'

import { View, StyleSheet } from 'react-sketchapp'

import { getChildStyle, clean } from '../../stylesHelper.sketch'

interface ISketchTouchableWithoutFeedbackState {}

function getDisplayName(Component: any) {
  return (
    Component.displayName ||
    Component.name ||
    (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown')
  )
}

export class TouchableWithoutFeedback extends React.Component<
  TouchableOpacityProps,
  ISketchTouchableWithoutFeedbackState
> {
  render() {
    return <View name="TouchableWithoutFeedback" />
  }

  renderxxx() {
    const { name, style, children } = this.props as any

    // console.log('TouchableWithoutFeedback(childrenName)', JSON.stringify(children.type))
    // console.log('TouchableWithoutFeedback(childrenName)', childrenName)
    /**
     *  childrenTypeName :
     *    Styled(Icon)
     *    Styled(Text)
     */
    const childrenTypeName = children.type.displayName
    // console.log('TouchableWithoutFeedback(childrenTypeName)', childrenTypeName)

    switch (childrenTypeName) {
      case 'Styled(Icon)': {
        const iconStyle = getChildStyle(this.props) || {}
        // console.log('TouchableWithoutFeedback(iconStyle)', JSON.stringify(iconStyle))
        return (
          <View name={name} style={iconStyle}>
            {children}
          </View>
        )
      }
      default:
      case 'Styled(Text)': {
        const textStyle = clean(style)
        // console.log('TouchableWithoutFeedback(textStyle)', JSON.stringify(textStyle))
        return (
          <View name={name} style={textStyle}>
            {children}
          </View>
        )
      }
    }
  }
}
