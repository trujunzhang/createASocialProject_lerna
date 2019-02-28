import * as React from 'react'
import * as ReactNative from 'react-native';
import { ActivityIndicator } from "react-primitives";

import { connectStyle } from "@app/native-base-shoutem-theme";
import { platformVariables as variable } from '@app/native-base-variables'
import mapPropsToStyleNames from "../utils/mapPropsToStyleNames";

export interface IProps extends ViewProps {
	style?: ReactNative.ViewStyle | Array<ReactNative.ViewStyle>
}
class Spinner extends React.Component {
	private _root: any
	static contextTypes = {
		theme: PropTypes.object,
	};
	render() {
		const variables = this.context.theme ? this.context.theme["@@shoutem.theme/themeStyle"].variables : variable;
		return (
			<ActivityIndicator
				ref={c => (this._root = c)}
				{...this.props}
				color={
					this.props.color
						? this.props.color
						: this.props.inverse ? variables.inverseSpinnerColor : variables.defaultSpinnerColor
				}
				size={this.props.size ? this.props.size : "large"}
			/>
		);
	}
}

// Spinner.propTypes = {
// 	...ActivityIndicator.propTypes,
// 	color: PropTypes.string,
// 	inverse: PropTypes.bool,
// };

const StyledSpinner = connectStyle("NativeBase.Spinner", {}, mapPropsToStyleNames)(Spinner);

export { StyledSpinner as Spinner };
