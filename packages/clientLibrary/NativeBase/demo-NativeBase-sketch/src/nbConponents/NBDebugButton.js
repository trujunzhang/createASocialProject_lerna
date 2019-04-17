import * as React from 'react';
import { View, Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from '@app/native-base';
const mb15 = {
    marginTop: 15,
    marginBottom: 20
};
export class NBDebugButton extends React.Component {
    renderInfo() {
        return React.createElement(Text, null, 'nb: button debug');
    }
    renderIcon() {
        return (React.createElement(Content, { padder: true },
            React.createElement(Icon, { name: "arrow-back" }),
            React.createElement(Icon, { iconColor: "blue", name: "arrow-back" }),
            React.createElement(Icon, { iconSize: 140, iconColor: "red", name: "arrow-back" }),
            React.createElement(Icon, { fontSize: 140, name: "arrow-back" })));
    }
    renderButton() {
        return React.createElement(Icon, { name: "arrow-back" });
    }
    renderHeader() {
        return (React.createElement(Header, { style: {
                width: 800,
                height: 44,
                backgroundColor: 'yellow'
            } },
            React.createElement(Left, null,
                React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                    React.createElement(Icon, { name: "arrow-back" }))),
            React.createElement(Body, null,
                React.createElement(Title, null, "Custom Size ")),
            React.createElement(Right, null)));
    }
    renderContent() {
        return (React.createElement(Content, { padder: true },
            React.createElement(View, { style: [
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    },
                    {
                        backgroundColor: 'orange'
                    }
                ] },
                React.createElement(Button, { style: [
                        {
                        // backgroundColor: 'blue'
                        }
                    ], iconLeft: true, success: true, onPress: () => this.props.navigation.openDrawer() },
                    React.createElement(Text, null, "Hello World!")))));
    }
    render() {
        /* const containerStyle = styles.container */
        const containerStyle = {
        /* backgroundColor: 'blue' */
        };
        return (React.createElement(Container, { style: [containerStyle] },
            React.createElement(Header, { style: {} },
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "arrow-back" }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "Custom Size , button")),
                React.createElement(Right, null)),
            this.renderContent()));
    }
}
//# sourceMappingURL=NBDebugButton.js.map