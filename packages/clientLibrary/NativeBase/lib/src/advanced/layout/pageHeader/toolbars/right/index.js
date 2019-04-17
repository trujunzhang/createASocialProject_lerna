import * as React from 'react';
import { ToolbarIcons } from '../icons';
import { Text } from '@appBasic/index'; // Advanced
export class RightElement extends React.Component {
    render() {
        const { rightElement, onToolbarIconsPressed } = this.props;
        const { renderRight, icons, titleObject } = rightElement;
        if (!!titleObject) {
            return React.createElement(Text, null, titleObject.title);
        }
        if (!!icons) {
            return React.createElement(ToolbarIcons, { onToolbarIconsPressed: onToolbarIconsPressed, icons: icons });
        }
        if (!!renderRight) {
            return renderRight();
        }
        return null;
    }
}
//# sourceMappingURL=index.js.map