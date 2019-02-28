import * as React from 'react'
import * as ReactNative from 'react-native';
import { Switch as SwitchNB } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

export interface IProps extends ViewProps {
	style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class Switch extends React.Component<IProps, any> {
	private _root: any

	render() {
		return <SwitchNB ref={c => (this._root = c)} {...this.props} />;
	}
}

// Switch.propTypes = {
// 	...Switch.propTypes,
// };

const StyledSwitch = connectStyle("NativeBase.Switch", {}, mapPropsToStyleNames)(Switch);

export { StyledSwitch as Switch };
