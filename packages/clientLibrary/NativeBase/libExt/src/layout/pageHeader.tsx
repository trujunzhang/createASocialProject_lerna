import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  FixLeft,
  Left,
  FixRight,
  Right,
  Body,
  Text
} from '@app/native-base'

import { getPageHeaderState } from './pageHeaderHelper'

import { LeftElement, RightElement, CenterElement } from './toolbars'
import { IPageToolbarParams } from './toolbarsParams'

interface IPageHeaderProps {
  transparent: boolean
  parallax: boolean
  noStatusBar: boolean
  toolbarParams: IPageToolbarParams
}

interface IPageHeaderState {
  hiddenHeader: boolean
  hasSubtitle: boolean
  useFixLeftAndRight: boolean
  showLeftElement: boolean
  showCenterElement: boolean
  showRightElement: boolean
}

export class PageHeader extends React.Component<IPageHeaderProps, IPageHeaderState> {
  constructor(props: IPageHeaderProps, context) {
    super(props, context)

    const {
      hiddenHeader,
      hasSubtitle,
      useFixLeftAndRight,
      showLeftElement,
      showCenterElement,
      showRightElement
    } = getPageHeaderState(props.toolbarParams)
    this.state = {
      hiddenHeader,
      hasSubtitle,
      useFixLeftAndRight,
      showLeftElement,
      showCenterElement,
      showRightElement
    }
  }

  renderLeft() {
    const { toolbarParams } = this.props
    const { leftElement, leftStyle, onToolbarIconsPressed } = toolbarParams
    const { useFixLeftAndRight } = this.state

    const content = (
      <LeftElement onToolbarIconsPressed={onToolbarIconsPressed} leftElement={leftElement} />
    )
    if (useFixLeftAndRight) {
      return <FixLeft style={leftStyle}>{content}</FixLeft>
    }

    return <Left style={leftStyle}>{content}</Left>
  }

  renderRight() {
    const { toolbarParams } = this.props
    const { rightElement, rightStyle, onToolbarIconsPressed } = toolbarParams
    const { useFixLeftAndRight } = this.state

    const content = (
      <RightElement onToolbarIconsPressed={onToolbarIconsPressed} rightElement={rightElement} />
    )
    if (useFixLeftAndRight) {
      return <FixRight style={rightStyle}>{content}</FixRight>
    }

    return <Right style={rightStyle}>{content}</Right>
  }

  renderBody() {
    const { toolbarParams } = this.props
    const { centerStyle, centerElement, headerStyle } = toolbarParams
    return (
      <Body style={[centerStyle]}>
        <CenterElement centerElement={centerElement} />
      </Body>
    )
  }

  render() {
    const { toolbarParams, transparent, parallax, noStatusBar } = this.props
    const { headerStyle } = toolbarParams
    const { hiddenHeader, hasSubtitle } = this.state

    if (hiddenHeader) {
      return null
    }

    return (
      <Header
        noStatusBar={noStatusBar}
        hasSubtitle={hasSubtitle}
        transparent={transparent}
        parallax={parallax}
        style={[
          headerStyle,
          {
            // backgroundColor:'red'
          }
        ]}>
        {this.state.showLeftElement && this.renderLeft()}
        {this.state.showCenterElement && this.renderBody()}
        {this.state.showRightElement && this.renderRight()}
      </Header>
    )
  }
}
