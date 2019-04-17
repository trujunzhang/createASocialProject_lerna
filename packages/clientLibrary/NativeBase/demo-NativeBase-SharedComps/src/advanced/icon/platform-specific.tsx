import * as React from 'react'

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
  Text
} from '@app/native-base'
import { IconVectorTypeFontAwesome } from '@app/tools'

import { Grid, Row, Col } from 'react-native-easy-grid'
import styles from './styles'

export class PlatformSpecificIcon extends React.Component<any, any> {
  renderContent() {
    return (
      <Row>
        <Col style={styles.col}>
          <Icon type={IconVectorTypeFontAwesome} name="bell-slash" />
          <Text>cart</Text>
        </Col>
      </Row>
    )
  }
  renderContentxxx() {
    return (
      <Row>
        <Col style={styles.col}>
          <Icon ios="ios-person" android="md-person" />
          <Text>person</Text>
        </Col>
        <Col style={styles.col}>
          <Icon ios="ios-apps-outline" android="md-apps" />
          <Text>apps</Text>
        </Col>
        <Col style={styles.col}>
          <Icon ios="ios-alarm" android="md-alarm" />
          <Text>alarm</Text>
        </Col>
        <Col style={styles.col}>
          <Icon ios="ios-paper" android="md-paper" />
          <Text>paper</Text>
        </Col>
        <Col style={styles.col}>
          <Icon ios="ios-cart-outline" android="md-cart" />
          <Text>cart</Text>
        </Col>
      </Row>
    )
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
            <Title>Platform</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Grid>{this.renderContent()}</Grid>
        </Content>
      </Container>
    )
  }
}
