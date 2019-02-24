// @flow

import { Platform, Dimensions } from "react-native";

import { platformVariables as variables } from "./../variables/platform";

const deviceHeight = Dimensions.get("window").height;
export default (variables /*: * */ = variable) => {
  const theme = {
    flex: 1,
    height: Platform.OS === "ios" ? deviceHeight : deviceHeight - 20,
    backgroundColor: variables.containerBgColor
  };

  return theme;
};
