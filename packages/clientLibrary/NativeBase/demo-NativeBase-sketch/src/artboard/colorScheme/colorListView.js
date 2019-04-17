import * as React from 'react';
import { View } from 'react-primitives';
export const ColorListView = () => {
    const views = Object.keys([]).map((color) => React.createElement(View, null));
    return (React.createElement(React.Fragment, null,
        React.createElement(View, { style: {
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: (96 + 8) * 4
            } }, views)));
};
//# sourceMappingURL=colorListView.js.map