import { platform } from '../../utils';
import { brandPrimary } from './Button';
export const radioButtonVariables = {
    // Radio Button
    radioBtnSize: platform === 'ios' ? 25 : 23,
    radioSelectedColorAndroid: '#3F51B5',
    radioBtnLineHeight: platform === 'ios' ? 29 : 24
};
export const radioButtonFuncVariables = {
    get radioColor() {
        return brandPrimary;
    }
};
//# sourceMappingURL=RadioButton.js.map