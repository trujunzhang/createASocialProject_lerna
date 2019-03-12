export interface ICurrentRNDemoPage {
  name: string
  screen: any
}

// Buttons
import {
  // Button
  NHButton,
  // item
  DefaultButton,
  OutlineButton,
  RoundedButton,
  BlockButton,
  FullButton,
  CustomButton,
  TransparentButton,
  IconBtn,
  DisabledButton
} from './screens'

import {
  ListItemButtonObject
} from './screens'

const currentListObject = ListItemButtonObject
const getCurrentPage = (index: number): ICurrentRNDemoPage => {
  const keys = Object.keys(currentListObject)
  const pageIndex = Math.min(index, keys.length - 1)
  const object = currentListObject[keys[pageIndex]]
  return {
    name: keys[pageIndex],
    screen: object.screen
  }
}

export const CurrentRNDemoPage: ICurrentRNDemoPage = getCurrentPage(10)

// export const CurrentRNDemoPage:ICurrentRNDemoPage = {
//     name: 'NHButton',
//     screen:NHButton
// }

// export const CurrentRNDemoPage:ICurrentRNDemoPage = {
//     name: 'DefaultButton',
//     screen: DefaultButton
// }

// export const CurrentRNDemoPage: ICurrentRNDemoPage = {
//   name: 'Full',
//   screen: FullButton
// }

// export const CurrentRNDemoPage: ICurrentRNDemoPage = {
//   name: 'IconBtn',
//   screen: IconBtn
// }

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
