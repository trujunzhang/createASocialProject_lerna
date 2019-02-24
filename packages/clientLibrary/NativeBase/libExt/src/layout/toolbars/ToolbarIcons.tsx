import * as React from 'react'
import { Button, Icon } from '@app/native-base'

import { IPageToolbarIcon, IPageToolbarIconPressed } from './iToolbars'
interface IToolbarIconsProps {
  icons: IPageToolbarIcon[]
  onToolbarIconsPressed?: IPageToolbarIconPressed
}

interface IToolbarIconsState {}

export class ToolbarIcons extends React.Component<IToolbarIconsProps, IToolbarIconsState> {
  render() {
    const { icons, onToolbarIconsPressed } = this.props
    return (icons || []).map((icon: IPageToolbarIcon) => {
      const { iconColor } = icon
      return (
        <Button
          transparent
          key={icon.iconType}
          onPress={() => {
            if (!!onToolbarIconsPressed) {
              onToolbarIconsPressed(icon)
            }
          }}>
          <Icon {...(!!iconColor ? { iconColor } : null)} name={icon.iconName} />
        </Button>
      )
    })
  }
}
