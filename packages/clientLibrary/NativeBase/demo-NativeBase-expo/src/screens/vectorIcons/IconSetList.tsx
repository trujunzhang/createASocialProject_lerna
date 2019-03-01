import * as React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  Alert,
  Keyboard,
  Platform,
  SectionList,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from '@app/native-base'
import ICON_SETS from './icon-sets'

import { renderPostActionButton } from './renderPostActionButton'

import { renderArticleActionButton } from './renderArticleActionButton'

// const renderButton = renderPostActionButton
const renderButton = renderArticleActionButton

const STYLING = [
  { name: 'github', size: 40, color: '#333' },
  {
    name: 'heart',
    size: 30,
    color: 'white',
    containerStyle: {
      backgroundColor: '#e0284f',
      borderRadius: 23,
      paddingHorizontal: 8,
      paddingTop: 9,
      paddingBottom: 7
    }
  },
  {
    name: 'star',
    size: 20,
    color: '#FF0000',
    containerStyle: {
      borderRadius: 20,
      padding: 7,
      borderWidth: 3,
      backgroundColor: '#FFDD00',
      borderColor: '#165E00'
    }
  },
  {
    name: 'font',
    size: 20,
    color: 'white',
    containerStyle: {
      borderRadius: 5,
      padding: 5,
      backgroundColor: '#47678e'
    }
  }
]

const INLINE = [
  {
    name: 'inline',
    children: (
      <Text>
        This text has <FontAwesome name="rocket" /> inline{' '}
        <FontAwesome name="hand-peace-o"> icons!</FontAwesome>
      </Text>
    )
  }
]

const styles = StyleSheet.create({
  sectionHeader: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#eee'
  },
  sectionHeaderTitle: {
    fontWeight: '500',
    fontSize: 11
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc'
  },
  text: {
    flex: 6
  },
  glyphCount: {
    flex: 1,
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'right'
  }
})

const keyExtractor = (item) => item.name

const ItemSeparator = () => <View style={styles.separator} />

const renderSectionHeader = ({ section }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderTitle}>{section.title}</Text>
  </View>
)

const renderInline = ({ item }) => <View style={styles.row}>{item.children}</View>

const renderStyling = ({ item }) => (
  <View style={styles.row}>
    <View style={item.containerStyle}>
      <FontAwesome {...item} />
    </View>
  </View>
)

export default class IconSetsList extends React.PureComponent<any, any> {
  state = {
    sections: [
      { title: 'ICON SETS', data: ICON_SETS },
      { title: 'BUTTONS', data: [{}], renderItem: renderButton }
      // { title: 'INLINE', data: INLINE, renderItem: renderInline },
      // { title: 'STYLING', data: STYLING, renderItem: renderStyling },
    ]
  }

  navigateToIconSet(iconSet) {
    Keyboard.dismiss()
    this.props.navigation.navigate('IconList', {
      title: iconSet.name,
      iconSet
    })
  }

  renderIconSet = ({ item }) => (
    <TouchableHighlight onPress={() => this.navigateToIconSet(item)} underlayColor="#eee">
      <View style={styles.row}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.glyphCount}>{item.glyphNames.length}</Text>
      </View>
    </TouchableHighlight>
  )

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{'Icon Set List'}</Title>
          </Body>
          <Right />
        </Header>

        <Content>{this.renderContent()}</Content>
      </Container>
    )
  }
  renderContent() {
    return (
      <React.Fragment>
        <SectionList
          sections={this.state.sections}
          renderSectionHeader={renderSectionHeader}
          renderItem={this.renderIconSet}
          ItemSeparatorComponent={ItemSeparator}
          initialNumToRender={15}
          keyExtractor={keyExtractor}
        />
      </React.Fragment>
    )
  }
}
