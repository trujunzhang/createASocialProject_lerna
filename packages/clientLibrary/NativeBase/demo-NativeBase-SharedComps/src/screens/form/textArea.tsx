import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Textarea,
  Body,
  Left,
  Right,
  Icon
} from "@app/native-base";
import styles from "./styles";

export class TextAreaForm extends React.Component<any, any> {
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
            <Title>TextArea</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Textarea rowSpan={5} bordered placeholder="Textarea" />
        </Content>
      </Container>
    );
  }
}

