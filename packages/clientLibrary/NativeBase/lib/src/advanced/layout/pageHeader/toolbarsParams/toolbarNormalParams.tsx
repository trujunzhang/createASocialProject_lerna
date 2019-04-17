import * as React from 'react'

import {
  IPageToolbarIcon,
  IPageToolbarParams,
  IPageToolbarIconPressed,
  IPageToolbarVisible
} from '@app/tools' // typings

import { nbToolbarIcons } from '@app/tools'

export interface IToolbarNormalParamsParams {
  navigation?: any
  leftIcons?: any
  renderLeft?: () => React.Component
  rightIcons?: any
  renderCenter?: () => React.Component
  title?: string
  subTitle?: string
  onToolbarIconsPressed?: IPageToolbarIconPressed
  visible?: IPageToolbarVisible
}
export const getToolbarNormalParams = (params: IToolbarNormalParamsParams): IPageToolbarParams => {
  const {
    navigation,
    title,
    subTitle,
    renderLeft,
    leftIcons,
    rightIcons,
    onToolbarIconsPressed,
    renderCenter,
    visible
  } = params
  const pageToolbarParams: IPageToolbarParams = {
    visible,
    leftElement: {
      icons: leftIcons,
      renderLeft
    },
    centerElement: {
      renderCenter,
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
          if (!!navigation) {
            navigation.dismiss()
          }
          break
        }
        case nbToolbarIcons.ICONS_LEFT_BACK: {
          if (!!navigation) {
            navigation.goBack()
          }
          break
        }
      }
    }
  }

  return pageToolbarParams
}
