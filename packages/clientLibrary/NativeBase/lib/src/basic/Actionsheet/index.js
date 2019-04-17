import * as React from 'react';
import { Modal, Platform, ActionSheetIOS, TouchableOpacity, FlatList, Dimensions } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { Text } from '@appBasic/Text';
import { Icon } from '@appBasic/Icon';
import { Left } from '@appBasic/Left';
import { Right } from '@appBasic/Right';
import { Body } from '@appBasic/Body';
import { ListItem } from '@appBasic/ListItem';
import { mapPropsToStyleNames } from '@app/tools';
class ActionSheetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            items: []
        };
    }
    static show(config, callback) {
        this.actionsheetInstance._root.showActionSheet(config, callback);
    }
    static hide() {
        this.actionsheetInstance._root.hideActionSheet();
    }
    showActionSheet(config, callback) {
        if (Platform.OS === 'ios') {
            if (typeof config.options[0] == 'object') {
                let options = config.options;
                let filtered = options.map((item) => {
                    return item.text;
                });
                config.options = filtered;
                ActionSheetIOS.showActionSheetWithOptions(config, callback);
            }
            else {
                ActionSheetIOS.showActionSheetWithOptions(config, callback);
            }
        }
        else {
            this.setState({
                items: config.options,
                title: config.title,
                message: config.message,
                destructiveButtonIndex: config.destructiveButtonIndex,
                cancelButtonIndex: config.cancelButtonIndex,
                modalVisible: true,
                callback: callback
            });
        }
    }
    hideActionSheet() {
        this.setState({ modalVisible: false });
    }
    componentDidMount() {
        if (!this.props.autoHide && this.props.duration) {
            console.warn(`It's not recommended to set autoHide false with duration`);
        }
    }
    render() {
        return (React.createElement(Modal, { animationType: 'fade', transparent: true, visible: this.state.modalVisible, onRequestClose: () => {
                this.state.callback(this.state.cancelButtonIndex);
                this.setState({ modalVisible: false });
            } },
            React.createElement(TouchableOpacity, { activeOpacity: 1, onPress: () => {
                    this.state.callback(this.state.cancelButtonIndex);
                    this.setState({ modalVisible: false });
                }, style: {
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    flex: 1,
                    justifyContent: 'flex-end'
                } },
                React.createElement(TouchableOpacity, { activeOpacity: 1, style: {
                        backgroundColor: '#fff',
                        minHeight: 56,
                        height: this.state.items.length * 80,
                        maxHeight: Dimensions.get('window').height / 2,
                        padding: 15,
                        elevation: 4
                    } },
                    this.state.title ? React.createElement(Text, { style: { color: '#757575' } }, this.state.title) : null,
                    React.createElement(FlatList, { style: {
                            marginHorizontal: -15,
                            marginTop: this.state.title ? 15 : 0
                        }, data: this.state.items, keyExtractor: (item, index) => String(index), renderItem: ({ index, item }) => {
                            return typeof this.state.items[0] === 'string' ? (React.createElement(ListItem, { onPress: () => {
                                    this.state.callback(parseInt(index));
                                    this.setState({ modalVisible: false });
                                }, style: { borderColor: 'transparent', marginLeft: 14 } },
                                React.createElement(Text, null, item))) : (React.createElement(ListItem, { onPress: () => {
                                    this.state.callback(parseInt(index));
                                    this.setState({ modalVisible: false });
                                }, style: {
                                    borderColor: 'transparent',
                                    marginLeft: 14,
                                    height: 50
                                }, icon: true },
                                React.createElement(Left, null,
                                    React.createElement(Icon, { name: item.icon, style: {
                                            color: item.iconColor ? item.iconColor : undefined
                                        } })),
                                React.createElement(Body, { style: { borderColor: 'transparent', paddingLeft: 7 } },
                                    React.createElement(Text, null, item.text)),
                                React.createElement(Right, null)));
                        } })))));
    }
}
// ActionSheetContainer.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array
//   ])
// };
const StyledActionSheetContainer = connectStyle('NativeBase.ActionSheetContainer', {}, mapPropsToStyleNames)(ActionSheetContainer);
const ActionSheet = StyledActionSheetContainer;
export { ActionSheet, StyledActionSheetContainer as ActionSheetContainer };
//# sourceMappingURL=index.js.map