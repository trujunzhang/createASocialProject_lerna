import * as React from 'react';
import { View, Text } from 'react-primitives';
import { Ionicons } from '@app/react-sketch-vector-icons';
export class FontAwesomeSvg extends React.Component {
    renderContent() {
        return React.createElement(Text, null, "Hello World!");
    }
    renderIcon() {
        return React.createElement(Ionicons, { name: "ios-arrow-back", size: 22, color: 'blue' });
    }
    render() {
        return (React.createElement(View, { name: "Sketch Layer name", style: {
                flexDirection: 'row',
                width: 480,
                height: 50,
                backgroundColor: 'red'
            } }, this.renderContent()));
    }
}
//# sourceMappingURL=fontAwesomeSvg.js.map