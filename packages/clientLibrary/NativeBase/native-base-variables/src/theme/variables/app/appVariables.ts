import { Platform } from 'react-primitives'

import { IThemeDefaultVariables } from '../../../types'

import { fontProxima } from '../../appFonts'

const platform = Platform.OS
export const fixedHeaderLeftWidth = 64

export const pageScrollBackground = '#f9f9f9'

export const inverseTextColor = '#fff'
export const iconFontSize = platform === 'ios' ? 28 : 28
export const fontSizeBase = 15

export const themeDefaultVariables: IThemeDefaultVariables = {
  btnFontFamily: 'MaterialIcons',
  iconFamily: 'MaterialIcons',
  fontFamily: fontProxima,
  titleFontfamily: fontProxima
}
