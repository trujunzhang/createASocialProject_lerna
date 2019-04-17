import * as React from 'react'

import { IPageToolbarParams } from '@app/tools' // typings

export const getToolbarHiddenParams = (): IPageToolbarParams => {
  return {
    leftElement: {},
    centerElement: {},
    rightElement: {}
  }
}
