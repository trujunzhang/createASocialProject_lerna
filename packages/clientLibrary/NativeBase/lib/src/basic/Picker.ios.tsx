import * as React from 'react'

import * as PropTypes from 'prop-types'
// import createReactClass from "create-react-class";
import { Picker, Modal, View, ViewProps, FlatList, ViewStyle, TextStyle } from 'react-primitives'
import { LodashUtils as _ } from '@app/tools'
import { Text } from './Text'
import { List } from './List'
import { IconNB as Icon } from './IconNB'
import { Radio } from './Radio'
import { Container } from './Container'
import { ListItem } from './ListItem'
import { Button } from './Button'
import { Header } from './Header'
import { Title } from './Title'
import { Left } from './Left'
import { Right } from './Right'
import { Body } from './Body'
import { connectStyle } from '@app/native-base-shoutem-theme'
import computeProps from '../utils/computeProps'

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames'

interface IPickerNBProps extends ViewProps {
  style?: ViewStyle | Array<ViewStyle>
  mode?: 'dialog' | 'dropdown'
  iosHeader?: string
  inlineLabel?: boolean
  headerBackButtonText?: string
  placeholder?: string
  placeholderStyle?: TextStyle
  textStyle?: TextStyle
  // iosIcon?: React.ReactElement<NativeBase.Icon>
  iosIcon?: any
  note?: boolean
  placeholderIconColor?: string
  itemTextStyle?: TextStyle
  headerStyle?: ViewStyle
  headerTitleStyle?: TextStyle
  headerBackButtonTextStyle?: TextStyle
  modalStyle?: ViewStyle
  renderHeader?: (backAction: any) => React.ReactElement<any>

  // Picker
  enabled?: any
  supportedOrientations?: any
  itemStyle?: any
  onValueChange?: any

  selectedValue?: any
  renderButton?: any
  headerBackButtonStyle?: any
  children?: any
}

class PickerNB extends React.Component<IPickerNBProps, any> {
  private _root: any
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      currentLabel: this.getLabel(props),
      dataSource: this.getChildren(props.children)
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentLabel = this.state.currentLabel
    const nextLabel = this.getLabel(nextProps)
    const currentDS = this.state.dataSource
    const nextDS = this.getChildren(nextProps.children)

    if (currentLabel !== nextLabel) {
      this.setState({
        currentLabel: nextLabel
      })
    }
    if (currentDS !== nextDS) {
      this.setState({
        dataSource: nextDS
      })
    }
  }

  getInitialStyle() {
    return {
      picker: {
        // alignItems: 'flex-end'
      },
      pickerItem: {}
    }
  }
  _setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().picker,
      itemStyle: this.getInitialStyle().pickerItem
    }

    return computeProps(this.props, defaultProps)
  }

  getLabel(props) {
    let children = this.getChildren(props.children)
    const item = (_ as any).find(children, (child) => child.props.value === props.selectedValue)
    return _.get(item, 'props.label')
  }

  getSelectedItem() {
    return (_ as any).find(
      this.props.children,
      (child) => child.props.value === this.props.selectedValue
    )
  }

  getChildren(children) {
    if (children && !Array.isArray(children)) {
      return [].concat(children)
    }
    children = [].concat.apply([], children)
    return children
  }

  renderIcon() {
    return React.cloneElement(this.props.iosIcon, {
      style: [
        {
          fontSize: 22,
          lineHeight: 26
        },
        { ...this.props.iosIcon.props.style }
      ]
    })
  }

  renderButton() {
    const onPress = () => {
      if (this.props.enabled !== undefined && !this.props.enabled) return
      this._setModalVisible(true)
    }
    const text = this.state.currentLabel ? this.state.currentLabel : this.props.placeholder
    if (this.props.renderButton) {
      return this.props.renderButton({
        onPress,
        text,
        picker: this,
        selectedItem: this.getSelectedItem()
      })
    }
    return (
      <Button style={this.props.style} dark picker transparent onPress={onPress}>
        {this.state.currentLabel ? (
          <Text style={this.props.textStyle} note={this.props.note}>
            {this.state.currentLabel}
          </Text>
        ) : (
            <Text
              style={[this.props.textStyle, this.props.placeholderStyle]}
              note={this.props.note === false ? false : true}>
              {this.props.placeholder}
            </Text>
          )}
        {this.props.iosIcon === undefined ? null : this.renderIcon()}
      </Button>
    )
  }

  renderHeader() {
    return this.props.renderHeader ? (
      this.props.renderHeader(() => this._setModalVisible(false))
    ) : (
        <Header style={this.props.headerStyle}>
          <Left>
            <Button
              style={{
                shadowOffset: null,
                shadowColor: null,
                shadowRadius: null,
                shadowOpacity: null,
                marginLeft: 3,
                ...this.props.headerBackButtonStyle
              }}
              transparent
              onPress={() => {
                this._setModalVisible(false)
              }}>
              <Text style={this.props.headerBackButtonTextStyle}>
                {this.props.headerBackButtonText || 'Back'}
              </Text>
            </Button>
          </Left>
          <Body>
            <Title style={this.props.headerTitleStyle}>{this.props.iosHeader || 'Select One'}</Title>
          </Body>
          <Right />
        </Header>
      )
  }

  render() {
    return (
      <View ref={(c) => (this._root = c)}>
        {this.renderButton()}
        <Modal
          supportedOrientations={this.props.supportedOrientations || null}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this._setModalVisible(false)
          }}>
          <Container style={this.props.modalStyle}>
            {this.renderHeader()}
            {/* <FlatList
              data={this.state.dataSource}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <ListItem
                  selected={item.props.value === this.props.selectedValue}
                  button
                  style={this.props.itemStyle}
                  onPress={() => {
                    this._setModalVisible(false)
                    this.setState({ current: item.props.label })
                  }}>
                  <Left>
                    <Text style={this.props.itemTextStyle}>{item.props.label}</Text>
                  </Left>
                  <Right>
                    {item.props.value === this.props.selectedValue ? (
                      <Radio selected />
                    ) : (
                      <Radio selected={false} />
                    )}
                  </Right>
                </ListItem>
              )}
            /> */}
          </Container>
        </Modal>
      </View>
    )
  }
}

; (PickerNB as any).Item = (props) => <Picker.Item {...props} />

// createReactClass({
// render() {
//   return <Picker.Item {...this.props()} />;
// }
// });

// PickerNB.propTypes = {
//   ...ViewPropTypes,
//   renderButton: PropTypes.func
// };

const StyledPickerNB = connectStyle('NativeBase.PickerNB', {}, mapPropsToStyleNames)(PickerNB)

export { StyledPickerNB as PickerNB }
