import { Platform, StatusBar } from 'react-native'
const platform = Platform.OS
export const fixedHeaderLeftWidth = 64

export const iconDefaultFamily = 'MaterialIcons'
export const defaultFontFamily = 'proxima'

export const pageScrollBackground = '#f9f9f9'

export const inverseTextColor = '#fff'
export const iconFontSize = platform === 'ios' ? 28 : 28
export const fontSizeBase = 15

// const axxppVariables: any = {
//   // Icon
//   iconFamily: iconDefaultFamily,
//   iconFontSize: platform === 'ios' ? 28 : 28,
//   // iconHeaderSize: platform === 'ios' ? 33 : 24,
//   iconHeaderSize: 24,
//   // Tabs
//   tabBgColor: '#F8F8F8',
//   tabFontSize: 15,
//   // Text
//   textColor: '#000',
//   inverseTextColor: '#fff',
//   noteFontSize: 14,
//   // Font
//   DefaultFontSize: 16,
//   fontSizeBase: 15,
//   // Color
//   brandPrimary: '#1ca0d8',
//   brandInfo: '#62B1F6',
//   brandSuccess: '#5cb85c',
//   brandDanger: '#d9534f',
//   brandWarning: '#f0ad4e',
//   brandDark: '#000',
//   brandLight: '#999',
//   brandFacebook: '#3b5998',
//   brandTwitter: '#00aced',

//   // Font.
//   fontFamily: 'proxima',
//   btnFontFamily: 'proxima',
//   // Page.
//   pageScrollBackground: '#f9f9f9',
//   // Toolbar.
//   toolbarBtnColor: 'rgba(0, 0, 0, 0.44)',
//   toolbarDefaultBg: '#fff',
//   toolbarHeight: platform === 'ios' ? 64 : 56 + (StatusBar.currentHeight || 0),
//   toolbarPaddingTop: platform === 'ios' ? 18 : 0 + (StatusBar.currentHeight || 0),
//   toolbarParallaxHeight: platform === 'ios' ? 64 : 56 + (StatusBar.currentHeight || 0),
//   toolbarParallaxPaddingTop: platform === 'ios' ? 18 : 0 + (StatusBar.currentHeight || 0),
//   // title/subtitle
//   titleFontSize: 17,
//   titleFontColor: '#000',
//   subTitleFontSize: 11,
//   subtitleColor: '#000',
//   // titleFontSize: platform === 'ios' ? 17 : 19,
//   // titleFontColor: platform === 'ios' ? '#000' : '#fff',
//   // subTitleFontSize: platform === 'ios' ? 11 : 14,
//   // subtitleColor: platform === 'ios' ? '#000' : '#fff',
//   // parallax.
//   parallaxFixedHeaderContainerStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: fixedHeaderLeftWidth
//     // backgroundColor: 'transparent'
//     // backgroundColor: 'yellow'
//   },

//   parallaxStickHeaderContainerStyle: {
//     paddingLeft: fixedHeaderLeftWidth
//   }
// }
