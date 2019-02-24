import {
  IPageToolbarIconPressed,
  IPageToolbarLeftElement,
  IPageToolbarCenterElement,
  IPageToolbarRightElement
} from '../toolbars'

export interface IPageToolbarParams {
  onToolbarIconsPressed?: IPageToolbarIconPressed
  headerStyle?: any
  leftStyle?: any
  centerStyle?: any
  rightStyle?: any
  leftElement: IPageToolbarLeftElement
  centerElement: IPageToolbarCenterElement
  rightElement: IPageToolbarRightElement
  showLeftElement?: boolean
  showCenterElement?: boolean
  showRightElement?: boolean
}
