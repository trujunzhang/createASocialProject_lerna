import 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Content } from '../../Content'
import { ListItem } from '../../ListItem'
import { CheckBox } from '../../Checkbox'
import { Body } from '../../Body'
import { Text } from '../../Text'

// Note: test renderer must be required after react-native.

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "ios";
//  return Platform;
// });

it('renders checkbox', () => {
  const tree = renderer
    .create(
      <Content>
        <ListItem button>
          <CheckBox checked={true} />
          <Body>
            <Text>Lunch Break</Text>
          </Body>
        </ListItem>
        <ListItem button>
          <CheckBox color="red" checked={false} />
          <Body>
            <Text>Daily Stand Up</Text>
          </Body>
        </ListItem>
      </Content>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
