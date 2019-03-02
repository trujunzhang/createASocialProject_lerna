import * as React from 'react'
import { TouchableNativeFeedback } from 'react-primitives'

const Button = (props) => {
  return (
    <TouchableNativeFeedback
      delayPressIn={0} // eslint-disable-line new-cap
      {...props}>
      {props.children}
    </TouchableNativeFeedback>
  )
}

module.exports = Button
//export default Button;
