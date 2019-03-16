import * as React from 'react'
import { View, Text, StyleSheet } from 'react-primitives'
import { Svg } from 'react-sketchapp'

export class RnSvgExample extends React.Component<any, any> {
  renderContent() {
    return <Text>Hello World!</Text>
  }

  renderIoniconsSVG() {
    const size = '100%'
    // const size = 512
    const color = '#ccc'
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        fill={color}
        viewBox="0 0 512 512">
        <Svg.G>
          <Svg.Path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
        </Svg.G>
      </Svg>
    )
  }

  renderCommonSvg() {
    const size = '100%'
    return (
      <Svg height={size} width={size} viewBox="0 0 100 100">
        <Svg.Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
        <Svg.Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
      </Svg>
    )
  }

  render() {
    // <Text>{'svg demo'}</Text>
    // { width: 28, height: 28 },
    return (
      <View
        style={{
          width: 200,
          height: 200,
          // backgroundColor: 'blue'
        }}>
        <View
          style={[
            {
              flex: 1,
              width: 200,
              height: 200
            },
            { alignItems: 'center', justifyContent: 'center' }
          ]}>
          {this.renderIoniconsSVG()}
        </View>
      </View>
    )
  }
}
