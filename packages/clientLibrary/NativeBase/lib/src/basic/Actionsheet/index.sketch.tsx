import * as React from 'react'
import * as PropTypes from 'prop-types'
import {
    View,
    Modal,
    Platform,
    TouchableOpacity,
    ViewProps,
    ViewStyle,
    Dimensions
} from 'react-primitives'
import { connectStyle } from '@app/native-base-shoutem-theme'
import { Text } from '../Text'
import { Button } from '../Button'
import { ViewNB } from '../View'
import { Icon } from '../Icon'
import { Left } from '../Left'
import { Right } from '../Right'
import { Body } from '../Body'
import { ListItem } from '../ListItem'
import mapPropsToStyleNames from '../../utils/mapPropsToStyleNames'

export interface IActionSheetContainerProps extends ViewProps {
    style?: ViewStyle | Array<ViewStyle>
    autoHide: boolean
    duration: number
}
class ActionSheetContainer extends React.Component<IActionSheetContainerProps | any, any> {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            items: []
        }
    }
    static actionsheetInstance
    static show(config, callback) {
        this.actionsheetInstance._root.showActionSheet(config, callback)
    }
    static hide() {
        this.actionsheetInstance._root.hideActionSheet()
    }
    showActionSheet(config, callback) {
        if (Platform.OS === 'ios') {
            if (typeof config.options[0] == 'object') {
                let options = config.options
                let filtered = options.map((item) => {
                    return item.text
                })
                config.options = filtered
            } else {
            }
        } else {
            this.setState({
                items: config.options,
                title: config.title,
                message: config.message,
                destructiveButtonIndex: config.destructiveButtonIndex,
                cancelButtonIndex: config.cancelButtonIndex,
                modalVisible: true,
                callback: callback
            })
        }
    }

    hideActionSheet() {
        this.setState({ modalVisible: false })
    }

    componentDidMount() {
        if (!this.props.autoHide && this.props.duration) {
            console.warn(`It's not recommended to set autoHide false with duration`)
        }
    }
    render() {
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.state.callback(this.state.cancelButtonIndex)
                    this.setState({ modalVisible: false })
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        this.state.callback(this.state.cancelButtonIndex)
                        this.setState({ modalVisible: false })
                    }}
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}>
                </TouchableOpacity>
            </Modal>
        )
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

const StyledActionSheetContainer = connectStyle(
    'NativeBase.ActionSheetContainer',
    {},
    mapPropsToStyleNames
)(ActionSheetContainer)

export { StyledActionSheetContainer as ActionSheetContainer }
