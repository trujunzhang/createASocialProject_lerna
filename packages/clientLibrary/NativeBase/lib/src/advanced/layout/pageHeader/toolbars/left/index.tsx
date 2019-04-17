import * as React from 'react'
import { ToolbarIcons } from '../icons'
import { Text } from '@appBasic/index' // Advanced

import { IPageToolbarIconPressed, IPageToolbarLeftElement } from '@app/tools' // typings

interface ILeftElementProps {
  onToolbarIconsPressed?: IPageToolbarIconPressed
  leftElement: IPageToolbarLeftElement
}

interface ILeftElementState {}

export class LeftElement extends React.Component<ILeftElementProps, ILeftElementState> {
  render() {
    const { leftElement, onToolbarIconsPressed } = this.props
    const { renderLeft, icons, titleObject } = leftElement

    if (!!titleObject) {
      return <Text>{titleObject.title}</Text>
    }

    if (!!icons) {
      return <ToolbarIcons onToolbarIconsPressed={onToolbarIconsPressed} icons={icons} />
    }

    if (renderLeft !== undefined && !!renderLeft) {
      return renderLeft()
    }

    return null
  }
}
