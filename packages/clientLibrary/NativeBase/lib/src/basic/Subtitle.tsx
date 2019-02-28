import * as React from 'react'
import * as ReactNative from 'react-native';
import { Text } from "react-primitives";
import { connectStyle } from "@app/native-base-shoutem-theme";
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

export interface IProps extends ViewProps {
	style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class Subtitle extends React.Component {
	private _root: any

	render() {
		return <Text ref={c => (this._root = c)} {...this.props} />;
	}
}

// Subtitle.propTypes = {
// 	...Text.propTypes,
// 	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
// };

const StyledSubtitle = connectStyle("NativeBase.Subtitle", {}, mapPropsToStyleNames)(Subtitle);
export { StyledSubtitle as Subtitle };
