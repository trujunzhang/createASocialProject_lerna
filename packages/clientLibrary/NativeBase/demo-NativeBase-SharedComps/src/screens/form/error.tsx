import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Form,
  Body,
  Left,
  Right,
  IconNB,
  Item,
  Input
} from "@app/native-base";
import styles from "./styles";

export class ErrorInput extends React.Component<any, any> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Error Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item error>
              <Input placeholder="Textbox with Error Input" />
              <IconNB name="ios-close-circle" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

