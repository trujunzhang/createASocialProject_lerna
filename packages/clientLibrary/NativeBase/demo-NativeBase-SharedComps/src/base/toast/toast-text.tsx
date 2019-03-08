import * as React from "react";
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

export class ToastText extends React.Component<any, any> {
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
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Toast Text Style</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                textStyle: { color: "yellow" },
                buttonText: "Okay"
              })}
          >
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


