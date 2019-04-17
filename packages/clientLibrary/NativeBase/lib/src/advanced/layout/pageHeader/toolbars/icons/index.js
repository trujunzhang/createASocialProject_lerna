import * as React from 'react';
import { Button, Icon } from '@appBasic/index'; // Advanced
import { IconVectorTypeIonicons } from '@app/tools';
export class ToolbarIcons extends React.Component {
    render() {
        const { icons, onToolbarIconsPressed } = this.props;
        return (icons || []).map((icon) => {
            const iconColor = icon.iconColor;
            const vectorType = icon.vectorType || IconVectorTypeIonicons;
            return (React.createElement(Button, { transparent: true, key: icon.iconType, onPress: () => {
                    if (!!onToolbarIconsPressed) {
                        onToolbarIconsPressed(icon);
                    }
                } },
                React.createElement(Icon, { iconColor: iconColor, type: vectorType, name: icon.iconName })));
        });
    }
}
//# sourceMappingURL=index.js.map