import * as React from 'react';
import { Header, Left, Right, Body } from '@appBasic/index'; // Advanced
import { getPageHeaderState } from './pageHeaderHelper';
import { LeftElement, RightElement, CenterElement } from './toolbars';
export class PageHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        const { hiddenHeader, hasSubtitle, useFixLeftAndRight, showLeftElement, showCenterElement, showRightElement } = getPageHeaderState(props.toolbarParams);
        this.state = {
            hiddenHeader,
            hasSubtitle,
            useFixLeftAndRight,
            showLeftElement,
            showCenterElement,
            showRightElement
        };
    }
    renderLeft() {
        const { toolbarParams } = this.props;
        const { leftElement, leftStyle, onToolbarIconsPressed } = toolbarParams;
        const { useFixLeftAndRight } = this.state;
        const content = (React.createElement(LeftElement, { onToolbarIconsPressed: onToolbarIconsPressed, leftElement: leftElement }));
        return (React.createElement(Left, { style: [
                leftStyle,
                {
                // backgroundColor: 'green'
                }
            ] }, content));
    }
    renderRight() {
        const { toolbarParams } = this.props;
        const { rightElement, rightStyle, onToolbarIconsPressed } = toolbarParams;
        const { useFixLeftAndRight } = this.state;
        const content = (React.createElement(RightElement, { onToolbarIconsPressed: onToolbarIconsPressed, rightElement: rightElement }));
        return (React.createElement(Right, { style: [
                rightStyle,
                {
                // backgroundColor: 'green'
                }
            ] }, content));
    }
    renderBody() {
        const { toolbarParams } = this.props;
        const { centerStyle, centerElement, headerStyle } = toolbarParams;
        return React.createElement(Body, { style: [centerStyle] }, React.createElement(CenterElement, { centerElement: centerElement }));
    }
    render() {
        const { toolbarParams, transparent, parallax, noStatusBar } = this.props;
        const { headerStyle } = toolbarParams;
        const { hiddenHeader, hasSubtitle } = this.state;
        if (hiddenHeader) {
            return null;
        }
        return (React.createElement(Header, { noStatusBar: noStatusBar, hasSubtitle: hasSubtitle, transparent: transparent, parallax: parallax, style: [
                headerStyle,
                {
                // backgroundColor: 'red'
                }
            ] },
            this.state.showLeftElement && this.renderLeft(),
            this.state.showCenterElement && this.renderBody(),
            this.state.showRightElement && this.renderRight()));
    }
}
//# sourceMappingURL=index.js.map