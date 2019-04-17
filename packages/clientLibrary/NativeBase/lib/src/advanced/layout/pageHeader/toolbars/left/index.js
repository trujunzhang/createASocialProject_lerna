import * as React from 'react';
import { ToolbarIcons } from '../icons';
import { Text } from '@appBasic/index'; // Advanced
export class LeftElement extends React.Component {
    render() {
        const { leftElement, onToolbarIconsPressed } = this.props;
        const { renderLeft, icons, titleObject } = leftElement;
        if (!!titleObject) {
            return React.createElement(Text, null, titleObject.title);
        }
        if (!!icons) {
            return React.createElement(ToolbarIcons, { onToolbarIconsPressed: onToolbarIconsPressed, icons: icons });
        }
        if (renderLeft !== undefined && !!renderLeft) {
            return renderLeft();
        }
        return null;
    }
}
//# sourceMappingURL=index.js.map