import * as React from 'react';
import { Animated, TouchableWithoutFeedback, FlatList, StyleSheet, View } from 'react-primitives';
import { Text } from '@appBasic/Text';
import { Icon } from '@appBasic/Icon';
import { platformVariables as variable } from '@appVariables/theme/variables/platform'; // variables // [variable]
class DefaultHeader extends React.Component {
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        return (React.createElement(View, { style: [
                styles.defaultHeader,
                this.props.headerStyle
                    ? this.props.headerStyle
                    : { backgroundColor: variables.headerStyle }
            ] },
            React.createElement(Text, null,
                " ",
                this.props.title),
            React.createElement(Icon, { style: [
                    { fontSize: 18 },
                    this.props.expanded
                        ? this.props.expandedIcon && this.props.expandedIconStyle
                            ? this.props.expandedIconStyle
                            : { color: variables.expandedIconStyle }
                        : this.props.icon && this.props.iconStyle
                            ? this.props.iconStyle
                            : { color: variables.iconStyle }
                ], name: this.props.expanded
                    ? this.props.expandedIcon
                        ? this.props.expandedIcon
                        : 'ios-arrow-up'
                    : this.props.icon
                        ? this.props.icon
                        : 'ios-arrow-down' })));
    }
}
class DefaultContent extends React.Component {
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        return (React.createElement(Text, { style: [
                { padding: 10 },
                this.props.contentStyle
                    ? this.props.contentStyle
                    : { backgroundColor: variables.contentStyle }
            ] }, this.props.content));
    }
}
class AccordionSubItem extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            fadeAnim: new Animated.Value(0.3)
        };
    }
    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 500
        }).start();
    }
    render() {
        let { fadeAnim } = this.state;
        return (React.createElement(Animated.View, { style: { ...this.props.style, opacity: fadeAnim } }, this.props.children));
    }
}
class AccordionItem extends React.Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(TouchableWithoutFeedback, { onPress: () => this.props.setSelected(this.props.index) },
                React.createElement(View, null, this.props.renderHeader ? (this.props.renderHeader(this.props.item, this.props.expanded)) : (React.createElement(DefaultHeader, { title: this.props.item.title, expanded: this.props.expanded, headerStyle: this.props.headerStyle, icon: this.props.icon, iconStyle: this.props.iconStyle, expandedIcon: this.props.expandedIcon, expandedIconStyle: this.props.expandedIconStyle })))),
            this.props.expanded ? (React.createElement(AccordionSubItem, null, this.props.renderContent ? (this.props.renderContent(this.props.item)) : (React.createElement(DefaultContent, { content: this.props.item.content, contentStyle: this.props.contentStyle })))) : null));
    }
}
export class Accordion extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { selected: undefined };
    }
    setSelected(index) {
        if (this.state.selected === index) {
            this.setState({ selected: undefined });
        }
        else {
            this.setState({ selected: index });
        }
    }
    componentDidMount() {
        this.setState({ selected: this.props.expanded });
    }
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        return (React.createElement(FlatList, Object.assign({ data: this.props.dataArray, extraData: this.state, style: [
                {
                    borderColor: variables.accordionBorderColor,
                    borderWidth: variables.borderWidth
                },
                this.props.style
            ], keyExtractor: (item, index) => String(index), renderItem: ({ item, index }) => (React.createElement(AccordionItem, { key: String(index), item: item, expanded: this.state.selected === index, index: index, setSelected: this.setSelected.bind(this), headerStyle: this.props.headerStyle, contentStyle: this.props.contentStyle, renderHeader: this.props.renderHeader, renderContent: this.props.renderContent, icon: this.props.icon, iconStyle: this.props.iconStyle, expandedIcon: this.props.expandedIcon, expandedIconStyle: this.props.expandedIconStyle })) }, this.props)));
    }
}
const styles = StyleSheet.create({
    defaultHeader: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
//# sourceMappingURL=index.js.map