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

export class ColumnNB extends React.Component<any, any> {
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
            <Title>Column Grid</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Col style={{ backgroundColor: "#635DB7" }} />
          <Col style={{ backgroundColor: "#00CE9F" }} />
        </Grid>
      </Container>
    );
  }
}


