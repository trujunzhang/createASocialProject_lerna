import { ColorUtils as Color } from '@app/tools'

import { StatusBar } from 'react-primitives'

import { IHeaderVariables, IHeaderFuncVariables } from '../../../../types'

import { material } from '../../utils'

const toolbarDefaultBg = '#fff'
const tabBgColor = '#F8F8F8'

const currentStatusBarHeight: number = StatusBar.currentHeight || 0

export const headerVariables: IHeaderVariables = {
  // Header
  toolbarBtnColor: material === 'ios' ? '#007aff' : '#fff',
  toolbarDefaultBg: material === 'ios' ? '#F8F8F8' : '#3F51B5',
  toolbarHeight: material === 'ios' ? 64 : 56,
  toolbarSearchIconSize: material === 'ios' ? 20 : 23,
  toolbarInputColor: material === 'ios' ? '#CECDD2' : '#fff',
  searchBarHeight: material === 'ios' ? 30 : 40,
  searchBarInputHeight: material === 'ios' ? 30 : 50,
  toolbarBtnTextColor: material === 'ios' ? '#007aff' : '#fff',
  toolbarDefaultBorder: material === 'ios' ? '#a7a6ab' : '#3F51B5',
  iosStatusbar: material === 'ios' ? 'dark-content' : 'light-content',
  toolbarPaddingTop: material === 'ios' ? 18 : 0 + currentStatusBarHeight,
  toolbarParallaxHeight: material === 'ios' ? 64 : 56 + currentStatusBarHeight,
  toolbarParallaxPaddingTop: material === 'ios' ? 18 : 0 + currentStatusBarHeight
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
