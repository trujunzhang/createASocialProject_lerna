import { Material } from 'react-primitives'

import { IThemeDefaultVariables } from '../../../types'

import { ProximaFontFamily, RobotoFontFamily } from '../../../fonts/appFonts'

const material = Material.OS
export const fixedHeaderLeftWidth = 64

export const pageScrollBackground = '#f9f9f9'

export const inverseTextColor = '#fff'
export const iconFontSize = material === 'ios' ? 28 : 28
export const fontSizeBase = 15

export const materialThemeDefaultVariables: IThemeDefaultVariables = {
  iconFamily: 'Ionicons',
  fontFamily: RobotoFontFamily.family,
  btnFontFamily: material === 'ios' ? 'System' : RobotoFontFamily.fontFace.medium,
  titleFontfamily: ProximaFontFamily.fontFace.medium
}
