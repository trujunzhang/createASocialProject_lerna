import { Platform } from 'react-native'

const platform = Platform.OS

import { IAppVariables } from '@app/native-base-variables'

const iconDefaultFamily = 'Ionicons'

// import {appVariablesPlatform as appVariables} from './appVariablesPlatform'
export const appVariablesPlatform: IAppVariables = {
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
