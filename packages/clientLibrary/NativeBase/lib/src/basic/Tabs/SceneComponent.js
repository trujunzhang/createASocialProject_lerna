const React = require("react");
const { Component } = React;
import { View } from "react-primitives";

const StaticContainer = require("./StaticContainer");

const SceneComponent = Props => {
  const { shouldUpdated, ...props } = Props;
  return (
    <View {...props}>
      <StaticContainer shouldUpdate={shouldUpdated}>
        {props.children}
      </StaticContainer>
    </View>
  );
};

module.exports = SceneComponent;
//export default SceneComponent;
