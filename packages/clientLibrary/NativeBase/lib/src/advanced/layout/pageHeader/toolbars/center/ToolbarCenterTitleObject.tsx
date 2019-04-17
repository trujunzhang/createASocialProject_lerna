import * as React from 'react'
import {
  Container,
  Subtitle,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon
} from '@appBasic/index' // Advanced

import { IPageToolbarTitleObject } from '@app/tools' // typings
interface IToolbarCenterTitleObjectProps {
  titleObject: IPageToolbarTitleObject
}

interface IToolbarCenterTitleObjectState {}

export class ToolbarCenterTitleObject extends React.Component<
  IToolbarCenterTitleObjectProps,
  IToolbarCenterTitleObjectState
> {
  render() {
    const { titleObject } = this.props
    const { title, subTitle } = titleObject
    return (
      <React.Fragment>
        <Title>{title || ''}</Title>
        {!!subTitle && <Subtitle>{subTitle}</Subtitle>}
      </React.Fragment>
    )
  }
}
