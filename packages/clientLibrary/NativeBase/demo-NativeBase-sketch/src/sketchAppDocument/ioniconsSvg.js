import * as React from 'react';
import { View, Text } from 'react-primitives';
import { Ionicons } from '@app/react-sketch-vector-icons';
export class IoniconsSvg extends React.Component {
    renderContent() {
        return React.createElement(Text, null, "Hello World!");
    }
    render() {
        return (React.createElement(View, { name: "Sketch Layer name", style: {
                flexDirection: 'row',
                width: 480,
                height: 50,
                backgroundColor: 'red'
            } },
            React.createElement(Ionicons, { name: "ios-arrow-back", size: 22, color: 'blue' })));
    }
}
//# sourceMappingURL=ioniconsSvg.js.map