import { IButtonVariables, IButtonColorVariables, IButtonFuncVariables } from '../../../../types'
import {
  platformThemeDefaultVariables,
  inverseTextColor,
  iconFontSize,
  fontSizeBase
} from '../platformVariables'
import { platform } from '../../utils'

// Color
export const brandPrimary = '#1ca0d8'

const brandInfo = '#62B1F6'
const brandSuccess = '#5cb85c'
const brandDanger = '#d9534f'
const brandWarning = '#f0ad4e'
const brandDark = '#000'
const brandLight = '#999'
const brandFacebook = '#3b5998'
const brandTwitter = '#00aced'

export const buttonVariables: IButtonVariables = {
  // Button
  btnFontFamily: platformThemeDefaultVariables.btnFontFamily,
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
  btnPrimaryBg: () => {
    return brandPrimary
  },
  btnPrimaryColor: () => {
    return inverseTextColor
  },
  btnInfoBg: () => {
    return brandInfo
  },
  btnInfoColor: () => {
    return inverseTextColor
  },
  btnSuccessBg: () => {
    return brandSuccess
  },
  btnSuccessColor: () => {
    return inverseTextColor
  },
  btnDangerBg: () => {
    return brandDanger
  },
  btnDangerColor: () => {
    return inverseTextColor
  },
  btnWarningBg: () => {
    return brandWarning
  },
  btnWarningColor: () => {
    return inverseTextColor
  },
  btnTwitterBg: () => {
    return brandTwitter
  },
  btnFacebookBg: () => {
    return brandFacebook
  },
  btnTextSize: () => {
    return platform === 'ios' ? fontSizeBase * 1.1 : fontSizeBase - 1
  },
  btnTextSizeLarge: () => {
    return fontSizeBase * 1.5
  },
  btnTextSizeSmall: () => {
    return fontSizeBase * 0.8
  },
  borderRadiusLarge: () => {
    return fontSizeBase * 3.8
  },

  iconSizeLarge: () => {
    return iconFontSize * 1.5
  },
  iconSizeSmall: () => {
    return iconFontSize * 0.6
  }
}
