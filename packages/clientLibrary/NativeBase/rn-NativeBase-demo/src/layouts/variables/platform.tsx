import { vectorIcons } from './vectorIcons'

import { appVariables } from './appVariables'

const deviceHeight = 400
const deviceWidth = 400
const platform: any = 'ios'
const platformStyle = undefined
const isIphoneX = false

// Color
const brandPrimary = platform === 'ios' ? '#1ca0d8' : '#1ca0d8'
const brandInfo = '#62B1F6'
const brandSuccess = '#5cb85c'
const brandDanger = '#d9534f'
const brandWarning = '#f0ad4e'
const brandDark = '#000'
const brandLight = '#f4f4f4'
const brandFacebook = '#3b5998'
const brandTwitter = '#00aced'

// Text
const textColor = '#000'
const inverseTextColor = '#fff'
const noteFontSize = 14

// Font
const DefaultFontSize = 16
const fontSizeBase = 15

const tabBgColor = '#F8F8F8'

const iconFontSize = platform === 'ios' ? 28 : 28

export function getPlatformVariables(themePlatformFunc: any) {
  const variables = {
    themePlatformFunc,
    iconRenderComponents: () => {
      return vectorIcons
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
    brandPrimary: platform === 'ios' ? '#1ca0d8' : '#1ca0d8',
    brandInfo: '#62B1F6',
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandDark: '#000',
    brandLight: '#f4f4f4',
    brandFacebook: '#3b5998',
    brandTwitter: '#00aced',

    // Container
    containerBgColor: '#fff',

    // Date Picker
    datePickerTextColor: '#000',
    datePickerBg: 'transparent',

    // Font
    DefaultFontSize: 16,
    fontFamily: appVariables.fontFamily,
    fontSizeBase: 15,
    fontSizeH1: () => {
      return fontSizeBase * 1.8
    },
    fontSizeH2: () => {
      return fontSizeBase * 1.6
    },
    fontSizeH3: () => {
      return fontSizeBase * 1.4
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
      return appVariables.toolbarDefaultBg
    },
    darkenHeader: () => {
      return tabBgColor
    },

    // Icon
    iconFamily: appVariables.iconFamily,
    iconFontSize: platform === 'ios' ? 28 : 28,
    // iconHeaderSize: platform === 'ios' ? 33 : 24,
    iconHeaderSize: 24,

    // InputGroup
    inputFontSize: 17,
    inputBorderColor: '#D9D5DC',
    inputSuccessBorderColor: '#2b8339',
    inputErrorBorderColor: '#ed2f2f',
    inputHeightBase: 50,
    inputColor: () => {
      return textColor
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
      return brandPrimary
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
    tabBgColor: '#F8F8F8',
    tabFontSize: 15,

    // Text
    textColor: '#000',
    inverseTextColor: '#fff',
    noteFontSize: 14,
    defaultTextColor: () => {
      return textColor
    },

    // Title
    titleFontfamily: appVariables.fontFamily,
    titleFontSize: appVariables.titleFontSize,
    titleFontColor: appVariables.titleFontColor,
    subTitleFontSize: appVariables.subTitleFontSize,
    subtitleColor: appVariables.subtitleColor,

    // Other
    borderRadiusBase: platform === 'ios' ? 5 : 2,
    borderWidth: 1,
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

  return variables
}
