import * as React from 'react'
import { DeviceEventEmitter, FlatList, Platform, StyleSheet, View, TextInput } from 'react-native'
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  searchBar: {
    marginTop: 4,
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc'
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: Platform.OS === 'android' ? 45 : 30
  },
  list: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc'
  },
  icon: {
    textAlign: 'center',
    marginRight: 10,
    width: 20
  },
  text: {
    flex: 1
  }
})

const getFilteredGlyphNames = (iconSet, query) => {
  const names = iconSet.glyphNames.filter((glyphNames) =>
    glyphNames.find((glyphName) => glyphName.indexOf(query) !== -1)
  )
  return names
}

const keyExtractor = (item) => item[0]

export default class IconList extends React.PureComponent {
  private searchListner: any
  state = {
    filter: ''
  }

  componentDidMount() {}

  componentWillUnmount() {
    if (this.searchListner) {
      this.searchListner.remove()
    }
  }

  setFilter(filter) {
    this.setState({
      filter: filter.toLowerCase()
    })
  }

  handleSearchChange = (event) => {
    const filter = event.nativeEvent.text.toLowerCase()
    this.setFilter(filter)
  }

  renderListItem = (item, iconSet) => {
    const Icon = iconSet.component
    return (
      <View style={styles.row}>
        <Icon name={item[0]} size={20} style={styles.icon} />
        <Text style={styles.text}>{item.join(', ')}</Text>
      </View>
    )
  }

  getNavigationParams() {
    const { navigation } = this.props as any
    const { state } = navigation
    const { params } = state

    return params
  }

  render() {
    const params = this.getNavigationParams()
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => (this.props as any).navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{params.title}</Title>
          </Body>
          <Right />
        </Header>

        <Content>{this.renderContent(params)}</Content>
      </Container>
    )
  }
  renderContent(params) {
    const glyphNames = getFilteredGlyphNames(params.iconSet, this.state.filter)

    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            onChange={this.handleSearchChange}
            placeholder="Search an icon..."
            style={styles.searchBarInput}
          />
        </View>
        <FlatList
          data={glyphNames}
          style={styles.list}
          renderItem={({ item }) => {
            return this.renderListItem(item, params.iconSet)
          }}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          initialNumToRender={20}
          keyExtractor={keyExtractor}
        />
      </View>
    )
  }
}
