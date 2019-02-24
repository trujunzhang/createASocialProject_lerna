import * as React from 'react'
import { ToolbarCenterTitleObject } from './ToolbarCenterTitleObject'
import { ToolbarCenterSearchBarObject } from './ToolbarCenterSearchBarObject'

import { IPageToolbarCenterSearchBarObject, IPageToolbarCenterTitleObject } from './iToolbars'

export interface IPageToolbarCenterElement {
  renderCenter?: () => any
  titleObject?: IPageToolbarCenterTitleObject
  searchBarObject?: IPageToolbarCenterSearchBarObject
}
interface ICenterElementProps {
  centerElement: IPageToolbarCenterElement
}

interface ICenterElementState {}

export class CenterElement extends React.Component<ICenterElementProps, ICenterElementState> {
  render() {
    const { centerElement } = this.props
    const { renderCenter, titleObject, searchBarObject } = centerElement

    if (!!renderCenter) {
      return renderCenter()
    }

    if (!!titleObject) {
      return <ToolbarCenterTitleObject titleObject={titleObject} />
    }
    if (!!searchBarObject) {
      return <ToolbarCenterSearchBarObject searchBarObject={searchBarObject} />
    }
    return null
  }
}
