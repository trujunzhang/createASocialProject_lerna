import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Toast
} from "@app/native-base";
import styles from "./styles";

class ToastButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Toast Button Style</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                buttonTextStyle: { color: "#008000" },
                buttonStyle: { backgroundColor: "#5cb85c" }
              })}
          >
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default ToastButton;
