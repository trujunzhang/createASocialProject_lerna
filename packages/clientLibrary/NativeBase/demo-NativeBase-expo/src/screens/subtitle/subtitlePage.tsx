import * as React from 'react'

import {
  View,
  Text,
  getToolbarNormalParams,
  IPageToolbarParams,
  nbPageToolbarIcons,
  nbToolbarIcons,
  PageLayout
} from '@app/native-base'

interface ISubtitlePageProps { }

interface ISubtitlePageState {
  toolbarParams: IPageToolbarParams
}

export class SubtitlePage extends React.Component<ISubtitlePageProps, ISubtitlePageState> {
  public state: ISubtitlePageState

  constructor(props: ISubtitlePageProps, context) {
    super(props, context)

    const toolbarParams: IPageToolbarParams = getToolbarNormalParams({
      navigation: {},
      leftIcons: [nbPageToolbarIcons[nbToolbarIcons.ICONS_LEFT_BACK]],
      title: 'Politicl',
      subTitle: 'Subtitle Demo'
    })

    this.state = {
      toolbarParams
    }
  }

  renderContent() {
    return (
      <View>
        <Text>{'Subtitle demo'}</Text>
      </View>
    )
  }
  render() {
    return <PageLayout toolbarParams={this.state.toolbarParams}>{this.renderContent()}</PageLayout>
  }
}
