import * as React from 'react'
import * as ReactNative from 'react-native';
import { Text } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

export interface IProps extends ViewProps {
	style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class H3 extends React.Component {
	private _root: any
	render() {
		return <Text ref={c => (this._root = c)} {...this.props} />;
	}
}

const childrenType = function (props, propName, component) {
	let error;
	const prop = props[propName];
	React.Children.forEach(prop, child => {
		if (typeof child !== "string" && typeof child !== "number") {
			error = new Error(`${component} should have only string or number`);
		}
	});
	return error;
};

// H3.propTypes = {
// 	...Text.propTypes,
// 	children: childrenType,
// 	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
// };

const StyledH3 = connectStyle("NativeBase.H3", {}, mapPropsToStyleNames)(H3);

export { StyledH3 as H3 };
