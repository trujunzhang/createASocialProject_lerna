import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { Switch as SwitchNB } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

class Switch extends Component {
	render() {
		return <SwitchNB ref={c => (this._root = c)} {...this.props} />;
	}
}

Switch.propTypes = {
	...Switch.propTypes,
};

const StyledSwitch = connectStyle("NativeBase.Switch", {}, mapPropsToStyleNames)(Switch);

export { StyledSwitch as Switch };
