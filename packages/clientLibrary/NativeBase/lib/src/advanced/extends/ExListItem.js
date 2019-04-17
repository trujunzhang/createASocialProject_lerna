import * as React from 'react';
import { ListItem, Text, Left, Right, Icon, Body } from '@appBasic/index'; // Advanced
import { getExListItemState } from './ExListItemHelper';
export class ExListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        const { hasLeft, oneLineCenter } = getExListItemState(props);
        this.state = {
            hasLeft,
            oneLineCenter
        };
    }
    renderLeft() {
        const { leftElement } = this.props;
        if (leftElement === undefined) {
            return null;
        }
        let icon = null;
        if (typeof leftElement === 'string') {
            icon = React.createElement(Icon, { name: leftElement });
        }
        if (typeof leftElement === 'object') {
            icon = React.createElement(Icon, { type: leftElement.iconType, name: leftElement.iconName });
        }
        return React.createElement(Left, null, icon);
    }
    renderRight() {
        const { rightElement } = this.props;
        if (rightElement === undefined) {
            return null;
        }
        return (React.createElement(Right, null,
            React.createElement(Icon, { name: rightElement })));
    }
    renderBodyAsString(bodyString) {
        return (React.createElement(Body, null,
            React.createElement(Text, null, bodyString)));
    }
    renderBodyAsObject(object) {
        const { oneLineCenter } = this.state;
        return (React.createElement(Body, null,
            React.createElement(Text, null, object.primaryText),
            oneLineCenter === false && (React.createElement(Text, { numberOfLines: 1, note: true }, object.secondaryText))));
    }
    renderBody() {
        const { centerElement } = this.props;
        if (centerElement === undefined) {
            return null;
        }
        if (typeof centerElement === 'string') {
            return this.renderBodyAsString(centerElement);
        }
        if (typeof centerElement === 'object') {
            return this.renderBodyAsObject(centerElement);
        }
        return null;
    }
    render() {
        const { onPress } = this.props;
        const { hasLeft } = this.state;
        return (React.createElement(ListItem, { noIndent: true, thumbnail: hasLeft, onPress: onPress },
            this.renderLeft(),
            this.renderBody(),
            this.renderRight()));
    }
}
//# sourceMappingURL=ExListItem.js.map