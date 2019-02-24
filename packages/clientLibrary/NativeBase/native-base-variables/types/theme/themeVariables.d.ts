export declare interface ThemePlatformFunc {
  /**
   * Converts a layout size (dp) to pixel size (px).
   * Guaranteed to return an integer number.
   */
  getPixelSizeForLayoutSize(layoutSize: number): number

  /**
   * This is defined to get current screen height.
   *
   * return Dimensions.get('window').height
   */
  getCurrentDeviceHeight(): number

  /**
   * This is defined as the width of a thin line on the platform. It can be
   * used as the thickness of a border or division between two elements.
   * Example:
   * ```
   *   {
   *     borderBottomColor: '#bbb',
   *     borderBottomWidth: StyleSheet.hairlineWidth
   *   }
   * ```
   *
   * This constant will always be a round number of pixels (so a line defined
   * by it look crisp) and will try to match the standard width of a thin line
   * on the underlying platform. However, you should not rely on it being a
   * constant size, because on different platforms and screen densities its
   * value may be calculated differently.
   *
   * return StyleSheet.hairlineWidth.
   */
  getStyleHairlineWidth(): number
}

/**
 * @see https://facebook.github.io/native/docs/platform-specific-code.html#content
 */
export type PlatformOSType = 'ios' | 'android' | 'macos' | 'windows' | 'web'

export declare interface themeVariables {
  // theme platform functions
  themePlatformFunc: ThemePlatformFunc
  // PageScroll
  pageScrollBackground: string
  // social
  brandFacebook: string
  brandTwitter: string
  platformStyle: any
  platform: PlatformOSType
  headerStyle: string
  iconStyle: string
  contentStyle: string
  expandedIconStyle: string
  accordionBorderColor: string
  androidRipple: boolean
  androidRippleColor: string
  androidRippleColorDark: string
  btnUppercaseAndroidText: boolean
  badgeBg: string
  badgeColor: string
  badgePadding: number
  btnFontFamily: string
  btnDisabledBg: string
  buttonPadding: number
  btnPrimaryBg: () => string
  btnPrimaryColor: () => string
  btnInfoBg: () => string
  btnInfoColor: () => string
  btnSuccessBg: () => string
  btnSuccessColor: () => string
  btnDangerBg: () => string
  btnDangerColor: () => string
  btnWarningBg: () => string
  btnWarningColor: () => string
  btnTwitterBg: () => string
  btnFacebookBg: () => string
  btnTextSize: () => number
  btnTextSizeLarge: () => number
  btnTextSizeSmall: () => number
  borderRadiusLarge: () => number
  iconSizeLarge: () => number
  iconSizeSmall: () => number
  cardDefaultBg: string
  cardBorderColor: string
  cardBorderRadius: number
  cardItemPadding: number
  CheckboxRadius: number
  CheckboxBorderWidth: number
  CheckboxPaddingLeft: number
  CheckboxPaddingBottom: number
  CheckboxIconSize: number
  CheckboxIconMarginTop: number | undefined
  CheckboxFontSize: number
  checkboxBgColor: string
  checkboxSize: number
  checkboxTickColor: string
  brandPrimary: string
  brandInfo: string
  brandSuccess: string
  brandDanger: string
  brandWarning: string
  brandDark: string
  brandLight: string
  containerBgColor: string
  datePickerTextColor: string
  datePickerBg: string
  DefaultFontSize: number
  fontFamily: string
  fontSizeBase: number
  fontSizeH1: () => number
  fontSizeH2: () => number
  fontSizeH3: () => number
  footerHeight: number
  footerDefaultBg: string
  footerPaddingBottom: number
  tabBarTextColor: string
  tabBarTextSize: number
  activeTab: string
  sTabBarActiveTextColor: string
  tabBarActiveTextColor: string
  tabActiveBgColor: string
  toolbarBtnColor: string
  toolbarDefaultBg: string
  toolbarHeight: number
  toolbarPaddingTop: number
  toolbarParallaxHeight: number
  toolbarParallaxPaddingTop: number
  toolbarSearchIconSize: number
  toolbarInputColor: string
  searchBarHeight: number
  searchBarInputHeight: number
  toolbarBtnTextColor: string
  toolbarDefaultBorder: string
  iosStatusbar: string
  statusBarColor: () => any
  darkenHeader: () => any
  iconFamily: string
  iconFontSize: number
  iconHeaderSize: number
  inputFontSize: number
  inputBorderColor: string
  inputSuccessBorderColor: string
  inputErrorBorderColor: string
  inputHeightBase: number
  inputColor: () => string
  inputColorPlaceholder: () => string
  iconRenderComponents: () => any
  btnLineHeight: number
  lineHeightH1: number
  lineHeightH2: number
  lineHeightH3: number
  lineHeight: number
  listItemSelected: string
  listBg: string
  listBorderColor: string
  listDividerBg: string
  listBtnUnderlayColor: string
  listItemPadding: number
  listNoteColor: string
  listNoteSize: number
  defaultProgressColor: string
  inverseProgressColor: string
  radioBtnSize: number
  radioSelectedColorAndroid: string
  radioBtnLineHeight: number
  radioColor: () => string
  segmentBackgroundColor: string
  segmentActiveBackgroundColor: string
  segmentTextColor: string
  segmentActiveTextColor: string
  segmentBorderColor: string
  segmentBorderColorMain: string
  defaultSpinnerColor: string
  inverseSpinnerColor: string
  tabDefaultBg: string
  topTabBarTextColor: string
  topTabBarActiveTextColor: string
  topTabBarBorderColor: string
  topTabBarActiveBorderColor: string
  tabBgColor: string
  tabFontSize: number
  textColor: string
  inverseTextColor: string
  noteFontSize: number
  defaultTextColor: () => string
  titleFontfamily: string
  titleFontSize: number
  subTitleFontSize: number
  subtitleColor: string
  titleFontColor: string
  borderRadiusBase: number
  borderWidth: number
  contentPadding: number
  dropdownLinkColor: string
  inputLineHeight: number
  deviceWidth: number
  deviceHeight: number
  isIphoneX: boolean
  inputGroupRoundedBorderRadius: number
  parallaxFixedHeaderContainerStyle: any
  parallaxStickHeaderContainerStyle: any
  Inset: {
    portrait: {
      topInset: number
      leftInset: number
      rightInset: number
      bottomInset: number
    }
    landscape: {
      topInset: number
      leftInset: number
      rightInset: number
      bottomInset: number
    }
  }
}
