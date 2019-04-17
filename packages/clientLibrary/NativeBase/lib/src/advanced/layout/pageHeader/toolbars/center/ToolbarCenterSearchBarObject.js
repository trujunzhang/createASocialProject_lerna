import * as React from 'react';
import { Input, Button, Item, Icon } from '@appBasic/index'; // Advanced
export class ToolbarCenterSearchBarObject extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onSearchClosePress = () => {
            this.setState({
                search: ''
            });
            const { searchBarObject } = this.props;
            if (!!searchBarObject.onSearchSubmitEditing) {
                searchBarObject.onSearchSubmitEditing('');
            }
        };
        this.state = {
            isSearchBar: false,
            search: ''
        };
    }
    search() {
        const { searchBarObject } = this.props;
        if (!!searchBarObject.onSearchSubmitEditing) {
            searchBarObject.onSearchSubmitEditing(this.state.search);
        }
    }
    render() {
        return (React.createElement(Item, { style: {
                flex: 1,
                marginLeft: 18
                // backgroundColor: 'red'
            } },
            React.createElement(Icon, { iconSize: 24, iconColor: 'rgba(0, 0, 0, 0.44)', name: "search" }),
            React.createElement(Input, { placeholder: "Search", autoCapitalize: 'none', autoCorrect: false, style: [
                    {
                    // backgroundColor: 'orange'
                    }
                ], value: this.state.search, onChangeText: (text) => this.setState({ search: text }), onSubmitEditing: () => this.search() }),
            !!this.state.search && (React.createElement(Button, { style: [
                    {
                        width: 30
                        // backgroundColor: 'orange'
                    }
                ], small: true, transparent: true, onlyCenter: true, onPress: this.onSearchClosePress },
                React.createElement(Icon, { active: true, iconSize: 20, iconColor: 'rgba(0, 0, 0, 0.44)', name: "close" })))));
    }
}
//# sourceMappingURL=ToolbarCenterSearchBarObject.js.map