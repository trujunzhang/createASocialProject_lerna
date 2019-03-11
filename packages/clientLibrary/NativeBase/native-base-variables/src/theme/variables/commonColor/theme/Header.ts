import { ColorUtils as Color } from '@app/tools'

import { StatusBar } from 'react-primitives'

import { IHeaderVariables, IHeaderFuncVariables } from '../../../../types'

import { commonColor } from '../../utils'

const toolbarDefaultBg = '#fff'
const tabBgColor = '#F8F8F8'

const currentStatusBarHeight: number = StatusBar.currentHeight || 0

export const headerVariables: IHeaderVariables = {
  // Header
  toolbarBtnColor: commonColor === 'ios' ? '#007aff' : '#fff',
  toolbarDefaultBg: commonColor === 'ios' ? '#F8F8F8' : '#3F51B5',
  toolbarHeight: commonColor === 'ios' ? 64 : 56,
  toolbarSearchIconSize: commonColor === 'ios' ? 20 : 23,
  toolbarInputColor: commonColor === 'ios' ? '#CECDD2' : '#fff',
  searchBarHeight: commonColor === 'ios' ? 30 : 40,
  searchBarInputHeight: commonColor === 'ios' ? 30 : 50,
  toolbarBtnTextColor: commonColor === 'ios' ? '#007aff' : '#fff',
  toolbarDefaultBorder: commonColor === 'ios' ? '#a7a6ab' : '#3F51B5',
  iosStatusbar: commonColor === 'ios' ? 'dark-content' : 'light-content',
  toolbarPaddingTop: commonColor === 'ios' ? 18 : 0 + currentStatusBarHeight,
  toolbarParallaxHeight: commonColor === 'ios' ? 64 : 56 + currentStatusBarHeight,
  toolbarParallaxPaddingTop: commonColor === 'ios' ? 18 : 0 + currentStatusBarHeight
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
