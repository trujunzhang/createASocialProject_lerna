import * as React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "@app/native-base";
import { Grid, Col } from "react-native-easy-grid";

export class CustomCol extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Custom Col</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Col size={1} style={{ backgroundColor: "#00CE9F" }} />
          <Col size={2} style={{ backgroundColor: "#635DB7" }} />
          <Col size={4} style={{ backgroundColor: "#DD9E2C" }} />
        </Grid>
      </Container>
    );
  }
}


