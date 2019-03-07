import * as React from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Accordion
} from '@app/native-base'

const dataArray = [
  {
    title: 'First Element',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!'
  },
  {
    title: 'Second Element',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!'
  },
  {
    title: 'Third Element',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!'
  }
]

export class AccordionIcon extends React.Component<any, any> {
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
            <Title>Icon</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{ backgroundColor: 'white' }}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            icon="add"
            expandedIcon="remove"
          />
        </Content>
      </Container>
    )
  }
}
