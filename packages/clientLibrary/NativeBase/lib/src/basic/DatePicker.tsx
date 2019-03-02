import * as React from 'react'

import {
  Modal,
  ViewProps,
  View,
  Platform,
  DatePickerIOS,
  DatePickerAndroid
} from 'react-primitives'
import { Text } from './Text'
import { platformVariables as variable } from '@app/native-base-variables'

export interface IDatePickerProps {
  defaultDate?: Date
  minimumDate?: Date
  maximumDate?: Date
  locale?: string
  placeHolderText?: string
  textStyle?: ReactNative.TextStyle
  placeHolderTextStyle?: ReactNative.TextStyle
  androidMode?: 'calendar' | 'spinner' | 'default'
  timeZoneOffsetInMinutes?: number
  modalTransparent?: boolean
  animationType?: 'slide' | 'fade' | 'none'
  disabled?: boolean
  onDateChange?: (date: any) => void
  formatChosenDate?: (date: any) => void
}
export class DatePicker extends React.Component<IDatePickerProps, any> {
  private _root: any
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      defaultDate: new Date(),
      chosenDate: undefined,
      disabled: true
    }
  }

  componentDidMount = () => {
    this.setState({
      defaultDate: this.props.defaultDate ? this.props.defaultDate : new Date(),
      disabled: this.props.disabled ? true : false
    })
    if (!this.props.placeHolderText && this.props.defaultDate) {
      this.setState({ chosenDate: this.props.defaultDate })
    }
  }

  setDate(date) {
    this.setState({ chosenDate: new Date(date) })
    if (this.props.onDateChange) {
      this.props.onDateChange(date)
    }
  }

  showDatePicker() {
    if (Platform.OS === 'android') {
      this.openAndroidDatePicker()
    } else {
      this.setState({ modalVisible: true })
    }
  }

  async openAndroidDatePicker() {
    try {
      const newDate: any = await DatePickerAndroid.open({
        date: this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate,
        minDate: this.props.minimumDate,
        maxDate: this.props.maximumDate,
        mode: this.props.androidMode
      })
      const { action, year, month, day } = newDate
      if (action === 'dateSetAction') {
        let selectedDate = new Date(year, month, day)
        this.setState({ chosenDate: selectedDate })
        !!this.props.onDateChange && this.props.onDateChange(selectedDate)
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message)
    }
  }

  formatChosenDate(date) {
    if (this.props.formatChosenDate) {
      return this.props.formatChosenDate(date)
    }
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/')
  }

  render() {
    const variables = this.context.theme
      ? this.context.theme['@@shoutem.theme/themeStyle'].variables
      : variable
    return (
      <View>
        <View>
          <Text
            onPress={!this.state.disabled ? this.showDatePicker.bind(this) : undefined}
            style={[
              { padding: 10, color: variables.datePickerTextColor },
              this.state.chosenDate ? this.props.textStyle : this.props.placeHolderTextStyle
            ]}>
            {this.state.chosenDate
              ? this.formatChosenDate(this.state.chosenDate)
              : this.props.placeHolderText
              ? this.props.placeHolderText
              : 'Select Date'}
          </Text>
          <View>
            <Modal
              animationType={this.props.animationType}
              transparent={this.props.modalTransparent} //from api
              visible={this.state.modalVisible}
              onRequestClose={() => {}}>
              <Text
                onPress={() => this.setState({ modalVisible: false })}
                style={{ backgroundColor: variables.datePickerBg, flex: 1 }}
              />
              <DatePickerIOS
                date={this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate}
                onDateChange={this.setDate.bind(this)}
                minimumDate={this.props.minimumDate}
                maximumDate={this.props.maximumDate}
                mode="date"
                locale={this.props.locale}
                timeZoneOffsetInMinutes={this.props.timeZoneOffsetInMinutes}
              />
            </Modal>
          </View>
        </View>
      </View>
    )
  }
}
