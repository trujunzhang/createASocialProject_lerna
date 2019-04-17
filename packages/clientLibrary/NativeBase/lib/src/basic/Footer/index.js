import * as React from 'react';
import * as PropTypes from 'prop-types';
import { View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { platformVariables as variable } from '@appVariables/theme/variables/platform'; // variables // [variable]
import { mapPropsToStyleNames } from '@app/tools';
import { isIphoneX } from 'react-primitives';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orientation: variable.deviceHeight > variable.deviceWidth ? 'portrait' : 'landscape'
        };
    }
    layoutChange(val) {
        let maxComp = Math.max(variable.deviceWidth, variable.deviceHeight);
        if (val.width >= maxComp)
            this.setState({ orientation: 'landscape' });
        else {
            this.setState({ orientation: 'portrait' });
        }
    }
    calculateHeight(mode, inSet) {
        let inset = null;
        if (inSet != undefined) {
            inset = inSet;
        }
        else {
            inset = variable.Inset;
        }
        const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape;
        let oldHeight = null;
        if (this.props.style.height != undefined) {
            oldHeight = this.props.style.height;
        }
        else if (this.props.style[1]) {
            oldHeight = this.props.style[1].height
                ? this.props.style[1].height
                : this.props.style[0].height;
        }
        else {
            oldHeight = this.props.style[0].height;
        }
        let height = oldHeight + InsetValues.bottomInset;
        return height;
    }
    calculatePadder(mode, inSet) {
        let inset = null;
        if (inSet != undefined) {
            inset = inSet;
        }
        else {
            inset = variable.Inset;
        }
        const InsetValues = mode === 'portrait' ? inset.portrait : inset.landscape;
        let bottomPadder = null;
        if (this.props.style[1] !== undefined) {
            if (this.props.style[1].padding !== undefined ||
                this.props.style[1].paddingTop !== undefined) {
                bottomPadder =
                    (this.props.style[1].paddingTop
                        ? this.props.style[1].paddingTop
                        : this.props.style[1].padding) + InsetValues.bottomInset;
            }
        }
        else if (this.props.style.padding !== undefined &&
            this.props.style.paddingTop !== undefined) {
            bottomPadder =
                (this.props.style.paddingTop ? this.props.style.paddingTop : this.props.style.padding) +
                    InsetValues.bottomInset;
        }
        else {
            bottomPadder = InsetValues.bottomInset;
        }
        return bottomPadder;
    }
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        return isIphoneX() ? (React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props, { onLayout: (e) => this.layoutChange(e.nativeEvent.layout), style: [
                this.props.style,
                {
                    height: this.calculateHeight(this.state.orientation, variables.Inset),
                    paddingBottom: this.calculatePadder(this.state.orientation, variables.Inset)
                }
            ] }))) : (React.createElement(View, Object.assign({ ref: (c) => (this._root = c) }, this.props)));
    }
}
Footer.contextTypes = {
    theme: PropTypes.object
};
// Footer.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array])
// }
const StyledFooter = connectStyle('NativeBase.Footer', {}, mapPropsToStyleNames)(Footer);
export { StyledFooter as Footer };
//# sourceMappingURL=index.js.map