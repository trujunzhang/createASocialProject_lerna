import * as React from 'react'

import { ListItem, Text, Left, Button, Right, Icon, Body } from '@appBasic/index' // Advanced

export interface IExListSectionTitleProps {
  style?: any
  text: string
}

export interface IExListSectionTitleState {}

export class ExListSectionTitle extends React.Component<
  IExListSectionTitleProps,
  IExListSectionTitleState
> {
  constructor(props: IExListSectionTitleProps, context) {
    super(props, context)
  }

  renderBody() {
    const { text: bodyString } = this.props

    return (
      <Body>
        <Text>{bodyString}</Text>
      </Body>
    )
  }

  render() {
    return (
      <ListItem itemHeader noIndent thumbnail={false} style={{ backgroundColor: 'transparent' }}>
        {this.renderBody()}
      </ListItem>
    )
  }
}
