import * as React from 'react'

// const React = require('react')
// const ReactNative = require('react-native')

import { TouchableNativeFeedback, View } from 'react-primitives'

export const Button = (props) => {
  return (
    <TouchableNativeFeedback
      delayPressIn={0} // eslint-disable-line new-cap
      {...props}>
      {props.children}
    </TouchableNativeFeedback>
  )
}

// module.exports = Button;
//export default Button;
