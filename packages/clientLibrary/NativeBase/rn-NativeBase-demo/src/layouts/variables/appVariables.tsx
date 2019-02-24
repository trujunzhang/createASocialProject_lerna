const platform = 'ios'

export const appVariables = {
  // Font.
  fontFamily: 'System',
  btnFontFamily: 'System',
  // btnFontFamily: 'roboto',
  // Default vector icon.
  iconFamily: 'MaterialIcons',
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
