import * as React from 'react'

import {
  IPageToolbarIconArray,
  IPageToolbarIcon,
  IPageToolbarParams,
  IPageToolbarLeftElement,
  IPageToolbarIconPressed,
  ToolbarRenderComponent
} from '@app/tools' // typings

export interface IHomeToolbarParamsParams {
  renderLeft?: () => ToolbarRenderComponent
  rightIcons: IPageToolbarIconArray
  onToolbarIconsRightPressed: IPageToolbarIconPressed
  onSearchSubmitEditing: (text: string) => any
  navigation: any
}

import { nbToolbarIcons } from '@app/tools'

export class HomeToolbarParams {
  private params: IHomeToolbarParamsParams
  constructor(params: IHomeToolbarParamsParams) {
    this.params = params
  }

  private getLeftElement(): IPageToolbarLeftElement {
    const { renderLeft } = this.params
    if (!!renderLeft) {
      return {
        renderLeft
      }
    }

    return {
      icons: [
        {
          iconName: 'arrow-back',
          iconType: nbToolbarIcons.ICONS_LEFT_BACK
        }
      ]
    }
  }

  getParams() {
    const { onSearchSubmitEditing, rightIcons } = this.params
    const toolbarParams: IPageToolbarParams = {
      leftElement: this.getLeftElement(),
      headerStyle: {
        // backgroundColor: 'black'
      },
      leftStyle: {
        // width: 44,
        // backgroundColor: 'yellow'
      },
      centerStyle: {
        height: 30
        // backgroundColor: 'blue'
      },
      rightStyle: {
        // width: rightElementItems.length * 44,
        // backgroundColor: 'orange'
      },
      centerElement: {
        searchBarObject: {
          onSearchSubmitEditing
        }
      },
      rightElement: {
        icons: rightIcons
      },
      onToolbarIconsPressed: this.onToolbarIconsPressed
    }
    return toolbarParams
  }

  private onToolbarIconsPressed = (icon: IPageToolbarIcon) => {
    const { navigation, onToolbarIconsRightPressed } = this.params
    switch (icon.iconType) {
      case nbToolbarIcons.ICONS_LEFT_BACK: {
        navigation.goBack()
        break
      }
      default: {
        onToolbarIconsRightPressed(icon)
        break
      }
    }
  }
}
