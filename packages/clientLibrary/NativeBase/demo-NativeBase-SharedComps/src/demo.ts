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

// export const CurrentRNDemoPage:ICurrentRNDemoPage = {
//     name: 'NHButton',
//     screen:NHButton
// }

// export const CurrentRNDemoPage:ICurrentRNDemoPage = {
//     name: 'DefaultButton',
//     screen: DefaultButton
// }

export const CurrentRNDemoPage: ICurrentRNDemoPage = {
  name: 'Full',
  screen: FullButton
}

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
