import * as React from 'react'
import { ToolbarIcons } from './ToolbarIcons'

import { IPageToolbarIconPressed, IPageToolbarIcon } from './iToolbars'

export interface IPageToolbarLeftElement {
  renderLeft?: () => any
  icons?: IPageToolbarIcon[]
}
interface ILeftElementProps {
  onToolbarIconsPressed?: IPageToolbarIconPressed
  leftElement: IPageToolbarLeftElement
}

interface ILeftElementState {}

export class LeftElement extends React.Component<ILeftElementProps, ILeftElementState> {
  render() {
    const { leftElement, onToolbarIconsPressed } = this.props
    const { renderLeft, icons } = leftElement

    if (!!icons) {
      return <ToolbarIcons onToolbarIconsPressed={onToolbarIconsPressed} icons={icons} />
    }

    if (renderLeft !== undefined && !!renderLeft) {
      return renderLeft()
    }

    return null
  }
}
