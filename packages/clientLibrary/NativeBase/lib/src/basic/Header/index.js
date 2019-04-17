import * as React from 'react';
import * as PropTypes from 'prop-types';
import { View, StatusBar, StyleSheet } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
import { platformVariables as variable } from '@appVariables/theme/variables/platform'; // variables // [variable]
import { isIphoneX } from 'react-primitives';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orientation: 'portrait'
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
        if (!!this.props.style) {
            if (this.props.style.height != undefined) {
                oldHeight = this.props.style.height;
            }
            else if (this.props.style[1]) {
                oldHeight = this.props.style[1].height
                    ? this.props.style[1].height
                    : this.props.style[0].height;
            }
            else if (this.props.style[0]) {
                oldHeight = this.props.style[0].height;
            }
        }
        let height = oldHeight + InsetValues.topInset;
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
        let topPadder = null;
        let style = StyleSheet.flatten(this.props.style);
        if (style.padding !== undefined || style.paddingTop !== undefined) {
            topPadder = (style.paddingTop ? style.paddingTop : style.padding) + InsetValues.topInset;
        }
        else {
            topPadder = InsetValues.topInset;
        }
        return topPadder;
    }
    renderStatusBar() {
        const { noStatusBar } = this.props;
        if (noStatusBar) {
            return null;
        }
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        const platformStyle = variables.platformStyle;
        return (React.createElement(StatusBar, { name: 'statusBar', backgroundColor: this.props.androidStatusBarColor
                ? this.props.androidStatusBarColor
                : variables.statusBarColor, barStyle: this.props.iosBarStyle
                ? this.props.iosBarStyle
                : platformStyle === 'material'
                    ? 'light-content'
                    : variables.iosStatusbar, translucent: this.props.transparent ? true : this.props.translucent }));
    }
    renderForIphoneX() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        return (React.createElement(View, Object.assign({ name: 'header-iosX', ref: (c) => (this._root = c) }, this.props, { style: [
                this.props.style,
                {
                    height: this.calculateHeight(this.state.orientation, variables.Inset),
                    paddingTop: this.calculatePadder(this.state.orientation, variables.Inset)
                }
            ] })));
    }
    renderForNormal() {
        return React.createElement(View, Object.assign({ name: 'header-other', ref: (c) => (this._root = c) }, this.props));
    }
    render() {
        return (React.createElement(View, { name: 'header', onLayout: (e) => this.layoutChange(e.nativeEvent.layout) },
            this.renderStatusBar(),
            isIphoneX() ? this.renderForIphoneX() : this.renderForNormal()));
    }
}
Header.defaultProps = {
    noStatusBar: false
};
Header.contextTypes = {
    theme: PropTypes.object
};
// Header.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
//   searchBar: PropTypes.bool,
//   rounded: PropTypes.bool
// }
const StyledHeader = connectStyle('NativeBase.Header', {}, mapPropsToStyleNames)(Header);
export { StyledHeader as Header };
//# sourceMappingURL=index.js.map