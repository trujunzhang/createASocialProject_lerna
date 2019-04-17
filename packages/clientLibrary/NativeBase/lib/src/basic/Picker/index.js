import * as React from 'react';
import createReactClass from 'create-react-class';
import { Picker as RNPicker } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { mapPropsToStyleNames } from '@app/tools';
export class PickerNB extends React.Component {
    render() {
        // const RNPicker: any = Picker
        return (React.createElement(RNPicker, Object.assign({ ref: (c) => (this._root = c) }, this.props), this.props.children));
    }
}
const StyledPickerNB = connectStyle('NativeBase.PickerNB', {}, mapPropsToStyleNames)(PickerNB);
const Picker = StyledPickerNB;
Picker.Item = createReactClass({
    render() {
        return React.createElement(Picker.Item, Object.assign({}, this.props));
    }
});
// export { StyledPickerNB as PickerNB }
export { Picker };
//# sourceMappingURL=index.js.map