import { IFontVariables, IFontFuncVariables } from '../../../../types'

import { materialThemeDefaultVariables, fontSizeBase } from '../materialVariables'
export const fontVariables: IFontVariables = {
  // Font
  DefaultFontSize: 16,
  fontFamily: materialThemeDefaultVariables.fontFamily,
  fontSizeBase
}

export const fontFuncVariables: IFontFuncVariables = {
  fontSizeH1: () => {
    return fontSizeBase * 1.8
  },
  fontSizeH2: () => {
    return fontSizeBase * 1.6
  },
  fontSizeH3: () => {
    return fontSizeBase * 1.4
  }
}
