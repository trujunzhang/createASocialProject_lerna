import { ICurrentRNDemoPage } from '@app/tools'

import * as Advanced from './advanced'

// const currentListObject = Advanced.ListItemHeaderObject
const currentListObject = Advanced.ListItemIconObject
// const currentListObject = Advanced.ListItemListObject
// const currentListObject = Advanced.ListItemSearchBarObject
// const currentListObject = Advanced.ListItemSegmentObject

import * as Screen from './screens'
// const currentListObject = Screen.ListItemButtonObject
// const currentListObject = Screen.ListItemCardObject

const getCurrentPage = (index: number): ICurrentRNDemoPage => {
  const keys = Object.keys(currentListObject)
  const pageIndex = Math.min(index, keys.length - 1)
  const object = currentListObject[keys[pageIndex]]
  return {
    name: keys[pageIndex],
    screen: object.screen
  }
}

export const CurrentRNDemoPage: ICurrentRNDemoPage = getCurrentPage(3)

import { FeatherIcons } from './vectorIcons'
// export const CurrentRNDemoPage:ICurrentRNDemoPage = {
// name: 'FeatherIcons',
// screen: FeatherIcons
// }

/*
  export const CurrentRNDemoPage:ICurrentRNDemoPage = {
    name: '',
    screen:
}
*/
