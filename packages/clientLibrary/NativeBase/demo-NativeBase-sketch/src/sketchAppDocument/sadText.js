import * as React from 'react';
import { View, Text } from 'react-primitives';
export class SadText extends React.Component {
    renderContent() {
        return React.createElement(Text, null, "Hello World!");
    }
    render() {
        return (React.createElement(View, { name: "Sketch Layer name", style: {
                flexDirection: 'row',
                width: 480,
                backgroundColor: '#01ffae'
            } },
            React.createElement(Text, null, "Hello World!"),
            React.createElement(Text, null, "Hello World!"),
            React.createElement(Text, null, "Hello World!")));
    }
}
//# sourceMappingURL=sadText.js.map