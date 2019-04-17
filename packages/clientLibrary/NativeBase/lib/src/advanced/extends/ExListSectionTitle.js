import * as React from 'react';
import { ListItem, Text, Body } from '@appBasic/index'; // Advanced
export class ExListSectionTitle extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    renderBody() {
        const { text: bodyString } = this.props;
        return (React.createElement(Body, null,
            React.createElement(Text, null, bodyString)));
    }
    render() {
        return (React.createElement(ListItem, { itemHeader: true, noIndent: true, thumbnail: false, style: { backgroundColor: 'transparent' } }, this.renderBody()));
    }
}
//# sourceMappingURL=ExListSectionTitle.js.map