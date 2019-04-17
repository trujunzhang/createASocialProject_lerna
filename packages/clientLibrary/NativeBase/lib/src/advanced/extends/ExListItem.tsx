import * as React from 'react'

import { ListItem, Text, Left, Button, Right, Icon, Body } from '@appBasic/index' // Advanced
import { getExListItemState } from './ExListItemHelper'

export interface ListItemLeftIcon {
  iconType: string
  iconName: string
}

export type ListItemLeftElement = string | ListItemLeftIcon

export interface ListItemCenterElementObject {
  primaryText: string
  secondaryText?: string
  tertiaryText?: string
}

export type ListItemCenterElement = string | ListItemCenterElementObject

export type ListItemRightElement = string

export interface IExListItemProps {
  onPress?: any
  leftElement?: ListItemLeftElement
  centerElement: ListItemCenterElement
  rightElement?: ListItemRightElement
}

export interface IExListItemState {
  hasLeft: boolean
  oneLineCenter: boolean
}

export class ExListItem extends React.Component<IExListItemProps, IExListItemState> {
  constructor(props: IExListItemProps, context) {
    super(props, context)

    const { hasLeft, oneLineCenter } = getExListItemState(props)
    this.state = {
      hasLeft,
      oneLineCenter
    }
  }
  renderLeft() {
    const { leftElement } = this.props
    if (leftElement === undefined) {
      return null
    }
    let icon: any = null
    if (typeof leftElement === 'string') {
      icon = <Icon name={leftElement} />
    }
    if (typeof leftElement === 'object') {
      icon = <Icon type={leftElement.iconType} name={leftElement.iconName} />
    }
    return <Left>{icon}</Left>
  }
  renderRight() {
    const { rightElement } = this.props
    if (rightElement === undefined) {
      return null
    }
    return (
      <Right>
        <Icon name={rightElement} />
      </Right>
    )
  }
  renderBodyAsString(bodyString: string) {
    return (
      <Body>
        <Text>{bodyString}</Text>
      </Body>
    )
  }
  renderBodyAsObject(object: ListItemCenterElementObject) {
    const { oneLineCenter } = this.state
    return (
      <Body>
        <Text>{object.primaryText}</Text>
        {oneLineCenter === false && (
          <Text numberOfLines={1} note>
            {object.secondaryText}
          </Text>
        )}
      </Body>
    )
  }

  renderBody() {
    const { centerElement } = this.props
    if (centerElement === undefined) {
      return null
    }

    if (typeof centerElement === 'string') {
      return this.renderBodyAsString(centerElement)
    }

    if (typeof centerElement === 'object') {
      return this.renderBodyAsObject(centerElement)
    }

    return null
  }

  render() {
    const { onPress } = this.props
    const { hasLeft } = this.state
    return (
      <ListItem noIndent thumbnail={hasLeft} onPress={onPress}>
        {this.renderLeft()}
        {this.renderBody()}
        {this.renderRight()}
      </ListItem>
    )
  }
}
