import { commonColorThemeDefaultVariables, fontSizeBase } from '../commonColorVariables';
export const fontVariables = {
    // Font
    DefaultFontSize: 16,
    fontFamily: commonColorThemeDefaultVariables.fontFamily,
    fontSizeBase
};
export const fontFuncVariables = {
    get fontSizeH1() {
        return fontSizeBase * 1.8;
    },
    get fontSizeH2() {
        return fontSizeBase * 1.6;
    },
    get fontSizeH3() {
        return fontSizeBase * 1.4;
    }
};
//# sourceMappingURL=Font.js.map