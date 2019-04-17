import * as React from 'react'

import { View, StyleSheet } from 'react-sketchapp'

import { getChildStyle, clean } from '../../stylesHelper.sketch'

interface ISketchTouchableOpacityState {}

export function getDisplayName(Component: any) {
  return (
    Component.displayName ||
    Component.name ||
    (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown')
  )
}

export class TouchableOpacity extends React.Component<any, ISketchTouchableOpacityState> {
  renderxxx() {
    return <View name="TouchableOpacity" />
  }

  get childrenTypeName() {
    const { children } = this.props
    if (!!children && !!(children as any).type && !!(children as any).type.displayName) {
      return (children as any).type.displayName
    }
    return 'Styled(Common)'
  }

  render() {
    const { name, style, children } = this.props as any

    // console.log('TouchableOpacity(childrenName)', JSON.stringify(children.type))
    // console.log('TouchableOpacity(childrenName)', childrenName)
    /**
     *  childrenTypeName :
     *    Styled(Icon)
     *    Styled(Text)
     */
    const childrenTypeName = this.childrenTypeName
    // const childrenTypeName : any= 'Styled(Common)'
    console.log('TouchableOpacity(childrenTypeName)', childrenTypeName)

    switch (childrenTypeName) {
      default: {
        return <View name={'TouchableOpacity: '} />
      }
      case 'Styled(Icon)': {
        const iconStyle = getChildStyle(this.props) || {}
        const textStyle = clean(style)
        // const iconStyle = {}
        // console.log('TouchableOpacity(iconStyle)', JSON.stringify(iconStyle))
        return <View style={{ ...iconStyle, ...textStyle }}>{children}</View>
      }
      case 'Styled(Text)': {
        const textStyle = clean(style)
        // console.log('TouchableOpacity(textStyle)', JSON.stringify(textStyle))
        return (
          <View name={name} style={textStyle}>
            {children}
          </View>
        )
      }
    }
    return null
  }
}
