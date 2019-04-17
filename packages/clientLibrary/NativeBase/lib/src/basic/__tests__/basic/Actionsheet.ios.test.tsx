import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Button } from '../../Button'
import { ActionSheetContainer as ActionSheet } from '../../Actionsheet'
import { Text } from '../../Text'

var BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel']
var DESTRUCTIVE_INDEX = 3
var CANCEL_INDEX = 4

// Note: test renderer must be required after react-native.

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "ios";
//   return Platform;
// });

it('renders ActionSheet', () => {
  const tree = renderer
    .create(
      <Button
        onPress={() =>
          ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: 'Select an option'
            },
            (buttonIndex) => {
              this.setState({ clicked: BUTTONS[buttonIndex] })
            }
          )
        }>
        <Text>Actionsheet</Text>
      </Button>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
