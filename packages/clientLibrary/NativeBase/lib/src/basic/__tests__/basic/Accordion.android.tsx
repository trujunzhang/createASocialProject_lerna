import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Container } from '../../Container'
import { Header } from '../../Header'
import { Content } from '../../Content'
import { Accordion } from '../../Accordion'

const dataArray = [
  { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
]

// Note: test renderer must be required after react-native.

// jest.mock('Platform', () => {
//   const Platform = require.requireActual('Platform');
//   Platform.OS = 'android';
//   return Platform;
// });

it('renders Regular Accordion', () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Icon and Expanded Icon Accordion', () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
        </Content>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Icon and Expanded Icon Style Accordion', () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: 'green' }}
            expandedIconStyle={{ color: 'red' }}
          />
        </Content>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Header and Content Style Accordion', () => {
  const tree = renderer
    .create(
      <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: '#b7daf8' }}
            contentStyle={{ backgroundColor: '#ddecf8' }}
          />
        </Content>
      </Container>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
