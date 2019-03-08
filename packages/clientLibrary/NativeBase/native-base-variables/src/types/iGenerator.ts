
export interface IFontFamily {
  family: string
  medium: string
}

export interface IThemeDefaultVariables {
  // For vector icons(default icon family).
  iconFamily: string
  // For text
  /**
   * fontFamily: only font family name 
   * btnFontFamily/titleFontfamily: one of 'small','medium','large'
   */
  fontFamily: string
  btnFontFamily: string
  titleFontfamily: string
}
