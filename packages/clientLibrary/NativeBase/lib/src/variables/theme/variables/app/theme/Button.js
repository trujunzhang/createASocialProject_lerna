import { appThemeDefaultVariables, inverseTextColor, iconFontSize, fontSizeBase } from '../appVariables';
import { platform } from '../../utils';
// Color
export const brandPrimary = '#1ca0d8';
const brandInfo = '#62B1F6';
const brandSuccess = '#5cb85c';
const brandDanger = '#d9534f';
const brandWarning = '#f0ad4e';
const brandDark = '#000';
const brandLight = '#999';
const brandFacebook = '#3b5998';
const brandTwitter = '#00aced';
export const buttonVariables = {
    // Button
    btnFontFamily: appThemeDefaultVariables.btnFontFamily,
    btnDisabledBg: '#b5b5b5',
    buttonPadding: 6
};
export const buttonColorVariables = {
    // Color
    brandPrimary,
    brandInfo,
    brandSuccess,
    brandDanger,
    brandWarning,
    brandDark,
    brandLight,
    brandFacebook,
    brandTwitter
};
export const buttonFuncVariables = {
    get btnPrimaryBg() {
        return brandPrimary;
    },
    get btnPrimaryColor() {
        return inverseTextColor;
    },
    get btnInfoBg() {
        return brandInfo;
    },
    get btnInfoColor() {
        return inverseTextColor;
    },
    get btnSuccessBg() {
        return brandSuccess;
    },
    get btnSuccessColor() {
        return inverseTextColor;
    },
    get btnDangerBg() {
        return brandDanger;
    },
    get btnDangerColor() {
        return inverseTextColor;
    },
    get btnWarningBg() {
        return brandWarning;
    },
    get btnWarningColor() {
        return inverseTextColor;
    },
    get btnTwitterBg() {
        return brandTwitter;
    },
    get btnFacebookBg() {
        return brandFacebook;
    },
    get btnTextSize() {
        return platform === 'ios' ? fontSizeBase * 1.1 : fontSizeBase - 1;
    },
    get btnTextSizeLarge() {
        return fontSizeBase * 1.5;
    },
    get btnTextSizeSmall() {
        return fontSizeBase * 0.8;
    },
    get borderRadiusLarge() {
        return fontSizeBase * 3.8;
    },
    get iconSizeLarge() {
        return iconFontSize * 1.5;
    },
    get iconSizeSmall() {
        return iconFontSize * 0.6;
    }
};
//# sourceMappingURL=Button.js.map