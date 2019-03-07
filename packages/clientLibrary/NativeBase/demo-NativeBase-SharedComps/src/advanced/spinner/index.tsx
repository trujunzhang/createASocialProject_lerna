import * as React from 'react'

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Spinner,
  Left,
  Right,
  Body
} from "@app/native-base";

import styles from "./styles";

export class NHSpinner extends React.Component<any, any> {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Spinner</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <Spinner />
          <Spinner color="red" />
          <Spinner color="green" />
          <Spinner color="blue" />
        </Content>
      </Container>
    );
  }
}


