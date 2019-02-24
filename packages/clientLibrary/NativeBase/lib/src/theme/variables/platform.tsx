import { Color } from '@app/color'

import { checkIsIphoneX } from '../../utils'

import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native'

import { themeVariables, ThemePlatformFunc } from '@app/native-base-variables'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const platformStyle = undefined
const isIphoneX = checkIsIphoneX()

const themePlatformFunc: ThemePlatformFunc = {
  getPixelSizeForLayoutSize: (layoutSize: number) => {
    return PixelRatio.getPixelSizeForLayoutSize(layoutSize)
  },
  getCurrentDeviceHeight: () => {
    return Dimensions.get('window').height
  },
  getStyleHairlineWidth: () => {
    return StyleSheet.hairlineWidth
  }
}

import { IAppVariables } from '@app/native-base-variables'

const iconDefaultFamily = 'MaterialIcons'

export const appVariables: IAppVariables = {
  // Icon
  iconFamily: iconDefaultFamily,
  iconFontSize: platform === 'ios' ? 28 : 28,
  // iconHeaderSize: platform === 'ios' ? 33 : 24,
  iconHeaderSize: 24,
  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  noteFontSize: 14,
  // Font
  DefaultFontSize: 16,
  fontSizeBase: 15,
  // Color
  brandPrimary: platform === 'ios' ? '#1ca0d8' : '#1ca0d8',
  brandInfo: '#62B1F6',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: '#000',
  brandLight: '#f4f4f4',
  brandFacebook: '#3b5998',
  brandTwitter: '#00aced',
  // Font.
  fontFamily: 'roboto',
  btnFontFamily: 'roboto',
  // Page.
  pageScrollBackground: '#f9f9f9',
  // Toolbar.
  toolbarBtnColor: 'white',
  toolbarDefaultBg: '#85CCEA',
  toolbarHeight: platform === 'ios' ? 64 : 56,
  toolbarPaddingTop: platform === 'ios' ? 18 : 0,
  // toolbarParallaxHeight: platform === 'ios' ? 64 : 56 + (StatusBar.currentHeight || 0),
  // toolbarParallaxPaddingTop: platform === 'ios' ? 18 : 0 + (StatusBar.currentHeight || 0),
  toolbarParallaxHeight: platform === 'ios' ? 64 : 56,
  toolbarParallaxPaddingTop: platform === 'ios' ? 18 : 0,
  // title/subtitle
  titleFontSize: 17,
  titleFontColor: 'black',
  subTitleFontSize: 11,
  subtitleColor: 'grey',
  // titleFontSize: platform === 'ios' ? 17 : 19,
  // titleFontColor: platform === 'ios' ? '#000' : '#fff',
  // subTitleFontSize: platform === 'ios' ? 11 : 14,
  // subtitleColor: platform === 'ios' ? '#000' : '#fff',
  parallaxFixedHeaderContainerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
    // backgroundColor: 'transparent'
    // backgroundColor: 'yellow'
  },

  parallaxStickHeaderContainerStyle: {}
}

export const platformVariables: themeVariables = {
  themePlatformFunc,
  iconRenderComponents: () => {
    return []
  },

  platformStyle,
  platform,

  // Accordion
  headerStyle: '#edebed',
  iconStyle: '#000',
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  accordionBorderColor: '#d3d3d3',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: platform === 'ios' ? 3 : 0,

  // Button
  btnFontFamily: appVariables.btnFontFamily,
  btnDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  btnPrimaryBg: () => {
    return appVariables.brandPrimary
  },
  btnPrimaryColor: () => {
    return appVariables.inverseTextColor
  },
  btnInfoBg: () => {
    return appVariables.brandInfo
  },
  btnInfoColor: () => {
    return appVariables.inverseTextColor
  },
  btnSuccessBg: () => {
    return appVariables.brandSuccess
  },
  btnSuccessColor: () => {
    return appVariables.inverseTextColor
  },
  btnDangerBg: () => {
    return appVariables.brandDanger
  },
  btnDangerColor: () => {
    return appVariables.inverseTextColor
  },
  btnWarningBg: () => {
    return appVariables.brandWarning
  },
  btnWarningColor: () => {
    return appVariables.inverseTextColor
  },
  btnTwitterBg: () => {
    return appVariables.brandTwitter
  },
  btnFacebookBg: () => {
    return appVariables.brandFacebook
  },
  btnTextSize: () => {
    return platform === 'ios' ? appVariables.fontSizeBase * 1.1 : appVariables.fontSizeBase - 1
  },
  btnTextSizeLarge: () => {
    return appVariables.fontSizeBase * 1.5
  },
  btnTextSizeSmall: () => {
    return appVariables.fontSizeBase * 0.8
  },
  borderRadiusLarge: () => {
    return appVariables.fontSizeBase * 3.8
  },
  iconSizeLarge: () => {
    return appVariables.iconFontSize * 1.5
  },
  iconSizeSmall: () => {
    return appVariables.iconFontSize * 0.6
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: '#ccc',
  cardBorderRadius: 2,
  cardItemPadding: platform === 'ios' ? 10 : 12,

  // CheckBox
  CheckboxRadius: platform === 'ios' ? 13 : 0,
  CheckboxBorderWidth: platform === 'ios' ? 1 : 2,
  CheckboxPaddingLeft: platform === 'ios' ? 4 : 2,
  CheckboxPaddingBottom: platform === 'ios' ? 0 : 5,
  CheckboxIconSize: platform === 'ios' ? 21 : 16,
  CheckboxIconMarginTop: platform === 'ios' ? undefined : 1,
  CheckboxFontSize: platform === 'ios' ? 23 / 0.9 : 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

  // Color
  brandPrimary: appVariables.brandPrimary,
  brandInfo: appVariables.brandInfo,
  brandSuccess: appVariables.brandSuccess,
  brandDanger: appVariables.brandDanger,
  brandWarning: appVariables.brandWarning,
  brandDark: appVariables.brandDark,
  brandLight: appVariables.brandLight,
  brandFacebook: appVariables.brandFacebook,
  brandTwitter: appVariables.brandTwitter,

  // Container
  containerBgColor: '#fff',

  // Date Picker
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // Font
  DefaultFontSize: appVariables.DefaultFontSize,
  fontFamily: appVariables.fontFamily,
  fontSizeBase: appVariables.fontSizeBase,
  fontSizeH1: () => {
    return appVariables.fontSizeBase * 1.8
  },
  fontSizeH2: () => {
    return appVariables.fontSizeBase * 1.6
  },
  fontSizeH3: () => {
    return appVariables.fontSizeBase * 1.4
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: platform === 'ios' ? '#737373' : '#bfc6ea',
  tabBarTextSize: platform === 'ios' ? 14 : 11,
  activeTab: platform === 'ios' ? '#007aff' : '#fff',
  sTabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: platform === 'ios' ? '#2874F0' : '#fff',
  tabActiveBgColor: platform === 'ios' ? '#cde1f9' : '#3F51B5',

  // Header
  toolbarBtnColor: appVariables.toolbarBtnColor,
  toolbarDefaultBg: appVariables.toolbarDefaultBg,
  toolbarHeight: appVariables.toolbarHeight,
  toolbarPaddingTop: appVariables.toolbarPaddingTop,
  toolbarParallaxHeight: appVariables.toolbarParallaxHeight,
  toolbarParallaxPaddingTop: appVariables.toolbarParallaxPaddingTop,
  // toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
  toolbarSearchIconSize: 14,
  toolbarInputColor: platform === 'ios' ? '#CECDD2' : '#fff',
  searchBarHeight: platform === 'ios' ? 30 : 30,
  searchBarInputHeight: platform === 'ios' ? 30 : 30,
  toolbarBtnTextColor: platform === 'ios' ? '#007aff' : '#fff',
  iosStatusbar: 'dark-content',
  toolbarDefaultBorder: platform === 'ios' ? '#a7a6ab' : '#3F51B5',
  statusBarColor: () => {
    return Color(appVariables.toolbarDefaultBg)
      .darken(0.2)
      .hex()
  },
  darkenHeader: () => {
    return Color(appVariables.tabBgColor)
      .darken(0.03)
      .hex()
  },

  // Icon
  iconFamily: appVariables.iconFamily,
  iconFontSize: appVariables.iconFontSize,
  // iconHeaderSize: platform === 'ios' ? 33 : 24,
  iconHeaderSize: appVariables.iconHeaderSize,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50,
  inputColor: () => {
    return appVariables.textColor
  },
  inputColorPlaceholder: () => {
    return '#575757'
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === 'ios' ? 20 : 20,

  // PageScroll
  pageScrollBackground: appVariables.pageScrollBackground,

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: platform === 'ios' ? 10 : 10,
  listNoteColor: '#808080',
  listNoteSize: 13,
  listItemSelected: platform === 'ios' ? '#007aff' : '#3F51B5',

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === 'ios' ? 25 : 23,
  radioSelectedColorAndroid: '#3F51B5',
  radioBtnLineHeight: platform === 'ios' ? 29 : 24,
  radioColor: () => {
    return appVariables.brandPrimary
  },

  // Segment
  /* segmentBackgroundColor: platform === 'ios' ? '#F8F8F8' : '#3F51B5', */
  /* segmentActiveBackgroundColor: platform === 'ios' ? '#007aff' : '#fff', */
  /* segmentTextColor: platform === 'ios' ? '#007aff' : '#fff', */
  /* segmentActiveTextColor: platform === 'ios' ? '#fff' : '#3F51B5', */
  /* segmentBorderColor: platform === 'ios' ? '#007aff' : '#fff', */
  /* segmentBorderColorMain: platform === 'ios' ? '#a7a6ab' : '#3F51B5', */

  // Segment
  segmentBackgroundColor: '#F8F8F8',
  segmentActiveBackgroundColor: '#007aff',
  segmentTextColor: '#007aff',
  segmentActiveTextColor: '#fff',
  segmentBorderColor: '#007aff',
  segmentBorderColorMain: '#a7a6ab',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  topTabBarTextColor: platform === 'ios' ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: platform === 'ios' ? '#007aff' : '#fff',
  topTabBarBorderColor: platform === 'ios' ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: platform === 'ios' ? '#007aff' : '#fff',

  // Tabs
  tabBgColor: appVariables.tabBgColor,
  tabFontSize: appVariables.tabFontSize,

  // Text
  textColor: appVariables.textColor,
  inverseTextColor: appVariables.inverseTextColor,
  noteFontSize: appVariables.noteFontSize,
  defaultTextColor: () => {
    return appVariables.textColor
  },

  // Title
  titleFontfamily: appVariables.fontFamily,
  titleFontSize: appVariables.titleFontSize,
  titleFontColor: appVariables.titleFontColor,
  subTitleFontSize: appVariables.subTitleFontSize,
  subtitleColor: appVariables.subtitleColor,

  // Other
  borderRadiusBase: platform === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // Parallax
  parallaxFixedHeaderContainerStyle: appVariables.parallaxFixedHeaderContainerStyle,
  parallaxStickHeaderContainerStyle: appVariables.parallaxStickHeaderContainerStyle,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21
    }
  }
}

export default platformVariables
