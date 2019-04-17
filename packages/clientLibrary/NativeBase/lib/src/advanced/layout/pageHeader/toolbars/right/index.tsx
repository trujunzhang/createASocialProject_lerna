import * as React from 'react'
import { ToolbarIcons } from '../icons'
import { Text } from '@appBasic/index' // Advanced

import { IPageToolbarIconPressed, IPageToolbarRightElement } from '@app/tools' // typings

interface IRightElementProps {
  onToolbarIconsPressed?: IPageToolbarIconPressed
  rightElement: IPageToolbarRightElement
}

interface IRightElementState {}

export class RightElement extends React.Component<IRightElementProps, IRightElementState> {
  render() {
    const { rightElement, onToolbarIconsPressed } = this.props
    const { renderRight, icons, titleObject } = rightElement

    if (!!titleObject) {
      return <Text>{titleObject.title}</Text>
    }
    if (!!icons) {
      return <ToolbarIcons onToolbarIconsPressed={onToolbarIconsPressed} icons={icons} />
    }

    if (!!renderRight) {
      return renderRight()
    }

    return null
  }
}
