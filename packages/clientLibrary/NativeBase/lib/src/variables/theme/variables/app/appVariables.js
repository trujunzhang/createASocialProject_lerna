import { Platform } from 'react-primitives';
import { ProximaFontFamily } from '../../../fonts/appFonts';
import { AppVectorIcons } from '../utils';
const platform = Platform.OS;
export const fixedHeaderLeftWidth = 64;
export const pageScrollBackground = '#f9f9f9';
export const inverseTextColor = '#fff';
export const iconFontSize = platform === 'ios' ? 28 : 28;
export const fontSizeBase = 15;
export const appThemeDefaultVariables = {
    iconFamily: AppVectorIcons.platformOS,
    fontFamily: ProximaFontFamily.family,
    btnFontFamily: ProximaFontFamily.fontFace.medium,
    titleFontfamily: ProximaFontFamily.fontFace.medium
};
//# sourceMappingURL=appVariables.js.map