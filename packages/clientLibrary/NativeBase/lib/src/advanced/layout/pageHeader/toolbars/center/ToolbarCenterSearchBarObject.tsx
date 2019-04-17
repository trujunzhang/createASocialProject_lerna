import * as React from 'react'
import { Container, Title, Input, Button, Item, Right, Body, Icon } from '@appBasic/index' // Advanced

import { IPageToolbarCenterSearchBarObject } from '@app/tools' // typings
interface IToolbarCenterSearchBarObjectProps {
  searchBarObject: IPageToolbarCenterSearchBarObject
}

interface IToolbarCenterSearchBarObjectState {
  isSearchBar: boolean
  search: string
}

export class ToolbarCenterSearchBarObject extends React.Component<
  IToolbarCenterSearchBarObjectProps,
  IToolbarCenterSearchBarObjectState
> {
  constructor(props: IToolbarCenterSearchBarObjectProps, context) {
    super(props, context)

    this.state = {
      isSearchBar: false,
      search: ''
    }
  }

  onSearchClosePress = () => {
    this.setState({
      search: ''
    })
    const { searchBarObject } = this.props
    if (!!searchBarObject.onSearchSubmitEditing) {
      searchBarObject.onSearchSubmitEditing('')
    }
  }
  search() {
    const { searchBarObject } = this.props
    if (!!searchBarObject.onSearchSubmitEditing) {
      searchBarObject.onSearchSubmitEditing(this.state.search)
    }
  }

  render() {
    return (
      <Item
        style={{
          flex: 1,
          marginLeft: 18
          // backgroundColor: 'red'
        }}>
        <Icon iconSize={24} iconColor={'rgba(0, 0, 0, 0.44)'} name="search" />
        <Input
          placeholder="Search"
          autoCapitalize={'none'}
          autoCorrect={false}
          style={[
            {
              // backgroundColor: 'orange'
            }
          ]}
          value={this.state.search}
          onChangeText={(text) => this.setState({ search: text })}
          onSubmitEditing={() => this.search()}
        />
        {!!this.state.search && (
          <Button
            style={[
              {
                width: 30
                // backgroundColor: 'orange'
              }
            ]}
            small
            transparent
            onlyCenter
            onPress={this.onSearchClosePress}>
            <Icon active iconSize={20} iconColor={'rgba(0, 0, 0, 0.44)'} name="close" />
          </Button>
        )}
      </Item>
    )
  }
}
