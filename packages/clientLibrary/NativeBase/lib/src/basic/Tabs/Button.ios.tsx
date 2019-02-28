const React = require("react");
import { TouchableOpacity } from "react-primitives";

const Button = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

module.exports = Button;
//export default Button;
