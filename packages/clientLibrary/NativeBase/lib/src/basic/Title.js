import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { Text } from "react-primitives";
import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Title extends Component {
	render() {
		return <Text ref={c => (this._root = c)} numberOfLines={1} {...this.props} />;
	}
}

Title.propTypes = {
	...Text.propTypes,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
};

const StyledTitle = connectStyle("NativeBase.Title", {}, mapPropsToStyleNames)(Title);
export { StyledTitle as Title };
