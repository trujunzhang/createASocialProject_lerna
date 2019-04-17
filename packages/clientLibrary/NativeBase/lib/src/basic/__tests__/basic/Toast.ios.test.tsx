import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Content } from '../../Content'
import { Button } from '../../Button'
import { Toast } from '../../Toast'
import { Text } from '../../Text'

// Note: test renderer must be required after react-native.
// const cover = require("../assets/drawer-cover.png");

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "ios";
//  return Platform;
// });

it('renders default Toast', () => {
  const tree = renderer
    .create(
      <Button
        onPress={() =>
          Toast.show({
            text: 'Wrong password!',
            buttonText: 'Okay'
          })
        }>
        <Text>Toast</Text>
      </Button>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Toast button style', () => {
  const tree = renderer
    .create(
      <Button
        onPress={() =>
          Toast.show({
            text: 'Wrong password!',
            buttonText: 'Okay',
            buttonTextStyle: { color: '#008000' },
            buttonStyle: { backgroundColor: '#5cb85c' }
          })
        }>
        <Text>Toast</Text>
      </Button>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Toast with duration', () => {
  const tree = renderer
    .create(
      <Button
        onPress={() =>
          Toast.show({
            text: 'Wrong password!',
            buttonText: 'Okay',
            duration: 3000
          })
        }>
        <Text>Toast</Text>
      </Button>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Toast position', () => {
  const tree = renderer
    .create(
      <Content padder>
        <Button
          onPress={() =>
            Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay',
              position: 'top'
            })
          }>
          <Text>Top Toast</Text>
        </Button>
        <Button
          onPress={() =>
            Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay',
              position: 'bottom'
            })
          }>
          <Text>Bottom Toast</Text>
        </Button>
      </Content>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Toast Text style', () => {
  const tree = renderer
    .create(
      <Button
        onPress={() =>
          Toast.show({
            text: 'Wrong password!',
            textStyle: { color: 'yellow' },
            buttonText: 'Okay'
          })
        }>
        <Text>Toast</Text>
      </Button>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Toast Type', () => {
  const tree = renderer
    .create(
      <Content padder>
        <Button
          onPress={() =>
            Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay'
            })
          }>
          <Text>Default Toast</Text>
        </Button>
        <Button
          success
          onPress={() =>
            Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay',
              type: 'success'
            })
          }>
          <Text>Success Toast</Text>
        </Button>
        <Button
          warning
          onPress={() =>
            Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay',
              type: 'warning'
            })
          }>
          <Text>Warning Toast</Text>
        </Button>
        <Button
          danger
          onPress={() =>
            Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay',
              type: 'danger'
            })
          }>
          <Text>Danger Toast</Text>
        </Button>
      </Content>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
