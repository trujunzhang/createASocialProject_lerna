import { Platform } from 'react-primitives'

import { IThemeDefaultVariables } from '../../../types'

import { ProximaFontFamily, RobotoFontFamily } from '../../../fonts/appFonts'

const platform = Platform.OS
export const fixedHeaderLeftWidth = 64

export const pageScrollBackground = '#f9f9f9'

export const inverseTextColor = '#fff'
export const iconFontSize = platform === 'ios' ? 28 : 28
export const fontSizeBase = 15

export const platformThemeDefaultVariables: IThemeDefaultVariables = {
  iconFamily: 'Ionicons',
  fontFamily: RobotoFontFamily.family,
  btnFontFamily: platform === 'ios' ? 'System' : RobotoFontFamily.fontFace.medium,
  titleFontfamily: ProximaFontFamily.fontFace.medium
}
