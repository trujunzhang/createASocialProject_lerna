import * as React from 'react'

import { Dimensions } from 'react-native'
import { LinearGradient } from 'expo'

import {
  Body,
  Title,
  View,
  Text,
  IPageToolbarParams,
  nbPageToolbarIcons,
  nbToolbarIcons,
  getToolbarNormalParams,
  ParallaxPageScrollLayout
} from '@app/native-base'
import { ListSwipeHelper } from '@app/tools'

const window = Dimensions.get('window')

interface IPostsPageProps {}

interface IPostsPageState {
  listSwipeHelper: ListSwipeHelper
  fixedToolbarParams: IPageToolbarParams
  stickyToolbarParams: IPageToolbarParams
}

export class PostsPage extends React.Component<IPostsPageProps, IPostsPageState> {
  constructor(props) {
    super(props)
    const { post } = props
    const fixedToolbarParams: IPageToolbarParams = getToolbarNormalParams({
      navigation: props.navigation,
      leftIcons: [
        {
          ...nbPageToolbarIcons[nbToolbarIcons.ICONS_LEFT_BACKICON_DISMISS]
          // iconColor: 'white'
        }
      ],
      rightIcons: [
        {
          ...nbPageToolbarIcons[nbToolbarIcons.ICONS_RIGHT_SETTINGS]
          // iconColor: 'white'
        }
      ]
    })

    const stickyToolbarParams: IPageToolbarParams = getToolbarNormalParams({
      navigation: props.navigation,
      title: 'Parallax Title'
    })

    this.state = {
      listSwipeHelper: new ListSwipeHelper({}),
      fixedToolbarParams,
      stickyToolbarParams
    }
  }

  componentDidMount() {
    // Only for test.
    // this.onFlagClick()
  }

  renderContent() {
    return (
      <View>
        <Text>{'Subtitle demo'}</Text>
      </View>
    )
  }
  render() {
    return (
      <ParallaxPageScrollLayout
        listSwipeHelper={this.state.listSwipeHelper}
        fixedToolbarParams={this.state.fixedToolbarParams}
        stickyToolbarParams={this.state.stickyToolbarParams}
        backgroundColor="transparent"
        contentBackgroundColor={'red'}
        parallaxHeaderHeight={240}
        stickyHeaderHeight={150}
        renderBackground={() => {
          return (
            <LinearGradient
              style={[
                {
                  width: window.width,
                  height: 240
                }
              ]}
              colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.6)']}
            />
          )
        }}>
        {this.renderContent()}
      </ParallaxPageScrollLayout>
    )
  }
}
