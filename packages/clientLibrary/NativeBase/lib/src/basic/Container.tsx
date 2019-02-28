import * as React from 'react'
import PropTypes from "prop-types";
import { View } from "react-primitives";
import { ViewProps } from "../utils";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";
import { ToastContainer as Toast } from "./ToastContainer";
import { ActionSheetContainer as ActionSheet } from "./Actionsheet";
import { Text } from "./Text";

class Container extends React.Component {
	private _root: any
	render() {
		return (
			<View ref={c => (this._root = c)} {...this.props}>
				{this.props.children}
			</View>
		);
	}
}

// Container.propTypes = {
// 	...ViewPropTypes,
// 	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
// };

const StyledContainer = connectStyle("NativeBase.Container", {}, mapPropsToStyleNames)(Container);

export { StyledContainer as Container };
