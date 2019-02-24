import * as React from 'react'
import { IPageToolbarIconPressed, IPageToolbarIcon } from '../toolbars'

import { nbToolbarIcons } from './toolbarConstants'

export interface IToolbarNormalParamsParams {
  navigation: any
  leftIcons?: any
  renderLeft?: () => any
  rightIcons?: any
  title?: string
  subTitle?: string
  onToolbarIconsPressed?: IPageToolbarIconPressed
  showLeftElement?: boolean
  showCenterElement?: boolean
  showRightElement?: boolean
}
export function getToolbarNormalParams(params: IToolbarNormalParamsParams) {
  const {
    title,
    subTitle,
    renderLeft,
    leftIcons,
    rightIcons,
    navigation,
    onToolbarIconsPressed,

    showLeftElement,
    showCenterElement,
    showRightElement
  } = params
  return {
    showLeftElement,
    showCenterElement,
    showRightElement,
    leftElement: {
      icons: leftIcons,
      renderLeft
    },
    centerElement: {
      titleObject: {
        title,
        subTitle
      }
    },
    rightElement: {
      icons: rightIcons
    },
    onToolbarIconsPressed: (icon: IPageToolbarIcon) => {
      // debugger
      if (!!onToolbarIconsPressed) {
        onToolbarIconsPressed(icon)
      }
      switch (icon.iconType) {
        case nbToolbarIcons.ICONS_LEFT_DISMISS: {
          navigation.dismiss()
          break
        }
        case nbToolbarIcons.ICONS_LEFT_BACK: {
          navigation.goBack()
          break
        }
      }
    }
  }
}
