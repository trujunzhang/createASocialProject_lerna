export interface ICurrentRNDemoPage {
  name: string
  screen: any
}

import * as Advanced from './advanced'

// const currentListObject = Advanced.ListItemHeaderObject
// const currentListObject = Advanced.ListItemIconObject
const currentListObject = Advanced.ListItemListObject

import { ListItemButtonObject } from './screens'
// const currentListObject = ListItemButtonObject

const getCurrentPage = (index: number): ICurrentRNDemoPage => {
  const keys = Object.keys(currentListObject)
  const pageIndex = Math.min(index, keys.length - 1)
  const object = currentListObject[keys[pageIndex]]
  return {
    name: keys[pageIndex],
    screen: object.screen
  }
}

export const CurrentRNDemoPage: ICurrentRNDemoPage = getCurrentPage(2)

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
