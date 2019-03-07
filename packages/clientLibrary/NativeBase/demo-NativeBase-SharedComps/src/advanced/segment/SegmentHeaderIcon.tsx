import * as React from 'react'
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Segment
} from "@app/native-base";

export class SegmentHeaderIcon extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      seg: 2
    };
  }
  render() {
    return (
      <Container>
        <Header hasSegment>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button
                first
                active={this.state.seg === 1 ? true : false}
                onPress={() => this.setState({ seg: 1 })}
              >
                <Icon name="arrow-back" />
              </Button>
              <Button
                last
                active={this.state.seg === 2 ? true : false}
                onPress={() => this.setState({ seg: 2 })}
              >
                <Icon name="arrow-forward" />
              </Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          {this.state.seg === 1 && <Text>Segment One</Text>}
          {this.state.seg === 2 && <Text>Segment Two</Text>}
        </Content>
      </Container>
    );
  }
}


