import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { Picker } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Item extends Component {
	render() {
		return <Picker.Item ref={c => (this._root = c)} {...this.props} />;
	}
}

Item.propTypes = {
	...Picker.Item.propTypes,
};

const StyledItem = connectStyle("NativeBase.Item", {}, mapPropsToStyleNames)(Item);

export { StyledItem as Item };
