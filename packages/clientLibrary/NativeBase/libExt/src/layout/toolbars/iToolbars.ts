export interface IPageToolbarIcon {
  iconName: string
  iconType: string
  iconColor?: string
}

export interface IPageToolbarCenterTitleObject {
  title?: string
  subTitle?: string
}

export type IPageToolbarIconPressed = (icon: IPageToolbarIcon) => any

export type IPageToolbarOnSearchSubmitEditingChanged = (text: string) => any
export interface IPageToolbarCenterSearchBarObject {
  onSearchSubmitEditing?: IPageToolbarOnSearchSubmitEditingChanged
}
