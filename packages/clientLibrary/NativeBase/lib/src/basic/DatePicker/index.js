import React from 'react';
import { Modal, View, Platform, DatePickerIOS, DatePickerAndroid } from 'react-primitives';
import { Text } from '@appBasic/Text';
import { platformVariables as variable } from '@appVariables/theme/variables/platform'; // variables // [variable]
export class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            defaultDate: props.defaultDate ? props.defaultDate : new Date(),
            chosenDate: !props.placeHolderText && props.defaultDate ? props.defaultDate : undefined
        };
    }
    setDate(date) {
        this.setState({ chosenDate: new Date(date) });
        if (this.props.onDateChange) {
            this.props.onDateChange(date);
        }
    }
    showDatePicker() {
        if (Platform.OS === 'android') {
            this.openAndroidDatePicker();
        }
        else {
            this.setState({ modalVisible: true });
        }
    }
    async openAndroidDatePicker() {
        try {
            const newDate = await DatePickerAndroid.open({
                date: this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate,
                minDate: this.props.minimumDate,
                maxDate: this.props.maximumDate,
                mode: this.props.androidMode
            });
            const { action, year, month, day } = newDate;
            if (action === 'dateSetAction') {
                let selectedDate = new Date(year, month, day);
                this.setState({ chosenDate: selectedDate });
                this.props.onDateChange(selectedDate);
            }
        }
        catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }
    formatChosenDate(date) {
        if (this.props.formatChosenDate) {
            return this.props.formatChosenDate(date);
        }
        return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
    }
    render() {
        const variables = this.context.theme
            ? this.context.theme['@@shoutem.theme/themeStyle'].variables
            : variable;
        return (React.createElement(View, null,
            React.createElement(View, null,
                React.createElement(Text, { onPress: !this.props.disabled ? this.showDatePicker.bind(this) : undefined, style: [
                        { padding: 10, color: variables.datePickerTextColor },
                        this.state.chosenDate ? this.props.textStyle : this.props.placeHolderTextStyle
                    ] }, this.state.chosenDate
                    ? this.formatChosenDate(this.state.chosenDate)
                    : this.props.placeHolderText
                        ? this.props.placeHolderText
                        : 'Select Date'),
                React.createElement(View, null,
                    React.createElement(Modal, { supportedOrientations: ['portrait', 'landscape'], animationType: this.props.animationType, transparent: this.props.modalTransparent, visible: this.state.modalVisible, onRequestClose: () => { } },
                        React.createElement(Text, { onPress: () => this.setState({ modalVisible: false }), style: { backgroundColor: variables.datePickerBg, flex: 1 } }),
                        React.createElement(DatePickerIOS, { date: this.state.chosenDate ? this.state.chosenDate : this.state.defaultDate, onDateChange: this.setDate.bind(this), minimumDate: this.props.minimumDate, maximumDate: this.props.maximumDate, mode: "date", locale: this.props.locale, timeZoneOffsetInMinutes: this.props.timeZoneOffsetInMinutes }))))));
    }
}
DatePicker.defaultProps = {
    disabled: false
};
//# sourceMappingURL=index.js.map