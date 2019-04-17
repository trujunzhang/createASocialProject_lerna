import * as React from 'react'
// const React = require('react')
// const ReactNative = require('react-native')
import { TouchableOpacity, View } from 'react-primitives'

export const Button = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {props.children}
    </TouchableOpacity>
  )
}

// module.exports = Button;
//export default Button;
