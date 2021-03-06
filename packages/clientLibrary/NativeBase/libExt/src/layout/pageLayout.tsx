import * as React from 'react'
import { Container, Content, ListSwipeHelper } from '@app/native-base'
// import { StyleProvider, connectStyle } from '@app/native-base-shoutem-theme'
import { ScrollView } from 'react-native'

import { IPageToolbarParams } from './toolbarsParams'

import { PageHeader } from './pageHeader'

interface IPageLayoutProps {
  toolbarParams?: IPageToolbarParams
  renderHeader?: any
  style?: any
  noScroll?: boolean
}

interface IPageLayoutState {
  // listSwipeHelper: IListSwipeHelper
  listSwipeHelper: ListSwipeHelper
  scrollEnabled: boolean
}

interface IPageLayoutDefaultProps {
  noScroll: boolean
}

type PageLayoutWithDefaults = IPageLayoutProps & IPageLayoutDefaultProps

class PageLayout extends React.Component<IPageLayoutProps, IPageLayoutState> {
  public static defaultProps: Partial<PageLayoutWithDefaults> = {
    noScroll: false
  }

  constructor(props: IPageLayoutProps, context) {
    super(props, context)
    const { noScroll } = props as PageLayoutWithDefaults
    const listSwipeHelper = new ListSwipeHelper({
      onScrollEnableChanged: (enable) => {
        // console.log('onScrollEnableChanged, enable: ', enable)
        this.setState({
          scrollEnabled: enable
        })
      }
    })
    this.state = {
      listSwipeHelper,
      scrollEnabled: !noScroll
    }
  }

  renderContent() {
    const { noScroll } = this.props as PageLayoutWithDefaults

    const { children } = this.props
    if (noScroll === true) {
      return children
    }

    const { listSwipeHelper } = this.state
    const childrenWithProps = React.Children.map(children, (child: any) => {
      return React.cloneElement(child, { listSwipeHelper })
    })

    return (
      <ScrollView
        scrollEventThrottle={16}
        onScroll={() => {
          listSwipeHelper.onRowCloseOrPressOrScroll(true)
        }}
        scrollEnabled={this.state.scrollEnabled}
        style={[this.props.style]}>
        {childrenWithProps}
      </ScrollView>
    )
  }

  renderPageHeader() {
    const { toolbarParams, renderHeader } = this.props

    if (renderHeader != undefined) {
      return renderHeader()
    }

    if (toolbarParams === undefined) {
      return null
    }

    return (
      <PageHeader
        toolbarParams={toolbarParams}
        transparent={false}
        parallax={false}
        noStatusBar={false}
      />
    )
  }

  render() {
    return (
      <Container>
        {this.renderPageHeader()}

        <Content scrollEnabled={this.state.scrollEnabled}>{this.renderContent()}</Content>
      </Container>
    )
  }
}

// const StyledPageLayout = connectStyle('NativeBase.PageLayout', {}, mapPropsToStyleNames)(PageLayout)

// export { StyledPageLayout as PageLayout }
export { PageLayout }
