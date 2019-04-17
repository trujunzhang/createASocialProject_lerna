import * as React from 'react'
import { Button, Icon } from '@appBasic/index' // Advanced
import { IconVectorTypeIonicons } from '@app/tools'

import { IPageToolbarIcon, IPageToolbarIconPressed, IPageToolbarParams } from '@app/tools' // typings

interface IToolbarIconsProps {
  icons: IPageToolbarIcon[]
  onToolbarIconsPressed?: IPageToolbarIconPressed
}

interface IToolbarIconsState {}

export class ToolbarIcons extends React.Component<IToolbarIconsProps, IToolbarIconsState> {
  render() {
    const { icons, onToolbarIconsPressed } = this.props
    return (icons || []).map((icon: IPageToolbarIcon) => {
      const iconColor = icon.iconColor
      const vectorType = icon.vectorType || IconVectorTypeIonicons
      return (
        <Button
          transparent
          key={icon.iconType}
          onPress={() => {
            if (!!onToolbarIconsPressed) {
              onToolbarIconsPressed(icon)
            }
          }}>
          <Icon iconColor={iconColor} type={vectorType} name={icon.iconName} />
        </Button>
      )
    })
  }
}
