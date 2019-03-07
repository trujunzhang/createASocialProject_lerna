import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form
} from "@app/native-base";
import styles from "./styles";

export class Underline extends React.Component<any, any> {
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
            <Title>Underline</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item>
              <Input placeholder="Underline Textbox" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

