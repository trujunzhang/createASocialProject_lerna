import * as React from 'react'
import { ToolbarCenterTitleObject } from './ToolbarCenterTitleObject'
import { ToolbarCenterSearchBarObject } from './ToolbarCenterSearchBarObject'

import { IPageToolbarCenterElement } from '@app/tools' // typings

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

    // if (!!titleObject) {
    //   return <ToolbarCenterTitleObject titleObject={titleObject} />
    // }

    if (!!searchBarObject) {
      // return <ToolbarCenterSearchBarObject searchBarObject={searchBarObject} />
    }
    return null
  }
}
