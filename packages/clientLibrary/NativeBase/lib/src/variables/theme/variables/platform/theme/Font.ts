import { IFontVariables, IFontFuncVariables } from '@app/tools' // typings
import { platformThemeDefaultVariables, fontSizeBase } from '../platformVariables'
export const fontVariables: IFontVariables = {
  // Font
  DefaultFontSize: 16,
  fontFamily: platformThemeDefaultVariables.fontFamily,
  fontSizeBase
}

export const fontFuncVariables: IFontFuncVariables = {
  get fontSizeH1() {
    return fontSizeBase * 1.8
  },
  get fontSizeH2() {
    return fontSizeBase * 1.6
  },
  get fontSizeH3() {
    return fontSizeBase * 1.4
  }
}