import { platform } from '../../utils';
import { platformThemeDefaultVariables } from '../platformVariables';
export const iconVariables = {
    // Icon
    iconFamily: platformThemeDefaultVariables.iconFamily,
    iconFontSize: platform === 'ios' ? 30 : 28,
    iconHeaderSize: platform === 'ios' ? 33 : 24
};
//# sourceMappingURL=Icon.js.map