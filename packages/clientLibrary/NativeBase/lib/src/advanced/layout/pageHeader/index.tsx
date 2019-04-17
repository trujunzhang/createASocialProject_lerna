import * as React from 'react'
import { Container, Header, Title, Content, Button, Left, Right, Body, Text } from '@appBasic/index' // Advanced

import { getPageHeaderState } from './pageHeaderHelper'

import { LeftElement, RightElement, CenterElement } from './toolbars'
import { IPageToolbarParams } from '@app/tools' // typings

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

    return (
      <Left
        style={[
          leftStyle,
          {
            // backgroundColor: 'green'
          }
        ]}>
        {content}
      </Left>
    )
  }

  renderRight() {
    const { toolbarParams } = this.props
    const { rightElement, rightStyle, onToolbarIconsPressed } = toolbarParams
    const { useFixLeftAndRight } = this.state

    const content = (
      <RightElement onToolbarIconsPressed={onToolbarIconsPressed} rightElement={rightElement} />
    )

    return (
      <Right
        style={[
          rightStyle,
          {
            // backgroundColor: 'green'
          }
        ]}>
        {content}
      </Right>
    )
  }

  renderBody() {
    const { toolbarParams } = this.props
    const { centerStyle, centerElement, headerStyle } = toolbarParams
    return <Body style={[centerStyle]}>{<CenterElement centerElement={centerElement} />}</Body>
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
            // backgroundColor: 'red'
          }
        ]}>
        {this.state.showLeftElement && this.renderLeft()}
        {this.state.showCenterElement && this.renderBody()}
        {this.state.showRightElement && this.renderRight()}
      </Header>
    )
  }
}
