import { IFontVariables, IFontFuncVariables } from '../../../../types'

import { appThemeDefaultVariables, fontSizeBase } from '../appVariables'
export const fontVariables: IFontVariables = {
  // Font
  DefaultFontSize: 16,
  fontFamily: appThemeDefaultVariables.fontFamily,
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
