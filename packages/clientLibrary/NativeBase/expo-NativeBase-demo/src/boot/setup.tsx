import * as React from 'react'
import { StyleProvider } from '@app/native-base'

import { View, Text } from 'react-native'

import { Root } from '@app/native-base'
import { SubtitlePage } from '../screens/subtitle/subtitlePage'
import { PostsPage } from '../screens/parallax/postsPage'

import { AppNavigator } from '../rootNavigator'
// import { AccordionNavigator } from '../navigators/accordionNavigator'
// import { ActionsheetNavigator } from '../navigators/actionsheetNavigator'
// import { HeaderNavigator } from '../navigators/headerNavigator'

import { getTheme } from '@app/nativebase-theme-components'
// import variables from '../theme/variables/commonColor'
// import variables from "../theme/variables/material";
import { platformVariables as variables } from '../theme/variables/platform'

export default class Setup extends React.Component {
  renderScreen() {
    return <AppNavigator />
    // return null
  }

  renderScreenxxx() {
    return (
      <View>
        <Text>{'screen!'}</Text>
      </View>
    )
  }

  render() {
    // console.log('setup : ', variables.parallaxFixedHeaderContainerStyle)

    return (
      <StyleProvider style={getTheme(variables)}>
        <Root>{this.renderScreen()}</Root>
      </StyleProvider>
    )
  }
}
