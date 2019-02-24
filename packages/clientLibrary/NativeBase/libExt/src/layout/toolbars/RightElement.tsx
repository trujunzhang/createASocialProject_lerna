import * as React from 'react'
import { ToolbarIcons } from './ToolbarIcons'

import { IPageToolbarIconPressed, IPageToolbarIcon } from './iToolbars'

export interface IPageToolbarRightElement {
  renderRight?: () => any
  icons?: IPageToolbarIcon[]
}
interface IRightElementProps {
  onToolbarIconsPressed?: IPageToolbarIconPressed
  rightElement: IPageToolbarRightElement
}

interface IRightElementState {}

export class RightElement extends React.Component<IRightElementProps, IRightElementState> {
  render() {
    const { rightElement, onToolbarIconsPressed } = this.props
    const { renderRight, icons } = rightElement

    if (!!icons) {
      return <ToolbarIcons onToolbarIconsPressed={onToolbarIconsPressed} icons={icons} />
    }

    if (!!renderRight) {
      return renderRight()
    }

    return null
  }
}
