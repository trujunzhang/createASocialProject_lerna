import { IButtonVariables, IButtonColorVariables, IButtonFuncVariables } from '@app/tools' // typings

import {
  commonColorThemeDefaultVariables,
  inverseTextColor,
  iconFontSize,
  fontSizeBase
} from '../commonColorVariables'
import { platform } from '../../utils'

// Color
export const brandPrimary = platform === 'ios' ? '#007aff' : '#3F51B5'
export const brandInfo = '#62B1F6'
export const brandSuccess = '#5cb85c'
export const brandDanger = '#d9534f'
export const brandWarning = '#f0ad4e'
export const brandDark = '#000'
export const brandLight = '#f4f4f4'

const brandFacebook = '#3b5998'
const brandTwitter = '#00aced'

export const buttonVariables: IButtonVariables = {
  // Button
  btnFontFamily: commonColorThemeDefaultVariables.btnFontFamily,
  btnDisabledBg: '#b5b5b5',
  buttonPadding: 6
}

export const buttonColorVariables: IButtonColorVariables = {
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
}

export const buttonFuncVariables: IButtonFuncVariables = {
  get btnPrimaryBg() {
    return brandPrimary
  },
  get btnPrimaryColor() {
    return inverseTextColor
  },
  get btnInfoBg() {
    return brandInfo
  },
  get btnInfoColor() {
    return inverseTextColor
  },
  get btnSuccessBg() {
    return brandSuccess
  },
  get btnSuccessColor() {
    return inverseTextColor
  },
  get btnDangerBg() {
    return brandDanger
  },
  get btnDangerColor() {
    return inverseTextColor
  },
  get btnWarningBg() {
    return brandWarning
  },
  get btnWarningColor() {
    return inverseTextColor
  },
  get btnTwitterBg() {
    return brandTwitter
  },
  get btnFacebookBg() {
    return brandFacebook
  },
  get btnTextSize() {
    return platform === 'ios' ? fontSizeBase * 1.1 : fontSizeBase - 1
  },
  get btnTextSizeLarge() {
    return fontSizeBase * 1.5
  },
  get btnTextSizeSmall() {
    return fontSizeBase * 0.8
  },
  get borderRadiusLarge() {
    return fontSizeBase * 3.8
  },

  get iconSizeLarge() {
    return iconFontSize * 1.5
  },
  get iconSizeSmall() {
    return iconFontSize * 0.6
  }
}
