import { ColorUtils as Color } from '@app/tools'

import { IHeaderVariables, IHeaderFuncVariables } from '../../../../types'

import { platform } from '../../utils'

import { StatusBar } from 'react-primitives'
const toolbarDefaultBg = '#fff'
const tabBgColor = '#F8F8F8'

export const headerVariables: IHeaderVariables = {
  // Header
  toolbarBtnColor: 'rgba(0, 0, 0, 0.44)',
  toolbarDefaultBg,
  toolbarHeight: platform === 'ios' ? 64 : 56 + (StatusBar.currentHeight || 0),
  toolbarPaddingTop: platform === 'ios' ? 18 : 0 + (StatusBar.currentHeight || 0),
  toolbarParallaxHeight: platform === 'ios' ? 64 : 56 + (StatusBar.currentHeight || 0),
  toolbarParallaxPaddingTop: platform === 'ios' ? 18 : 0 + (StatusBar.currentHeight || 0),
  toolbarSearchIconSize: 14,
  toolbarInputColor: platform === 'ios' ? '#CECDD2' : '#fff',
  searchBarHeight: platform === 'ios' ? 30 : 30,
  searchBarInputHeight: platform === 'ios' ? 30 : 30,
  toolbarBtnTextColor: platform === 'ios' ? '#007aff' : '#fff',
  iosStatusbar: 'dark-content',
  toolbarDefaultBorder: platform === 'ios' ? '#a7a6ab' : '#3F51B5'
}

export const headerFuncVariables: IHeaderFuncVariables = {
  statusBarColor: () => {
    return Color(toolbarDefaultBg)
      .darken(0.2)
      .hex()
  },
  darkenHeader: () => {
    return Color(tabBgColor)
      .darken(0.03)
      .hex()
  }
}
