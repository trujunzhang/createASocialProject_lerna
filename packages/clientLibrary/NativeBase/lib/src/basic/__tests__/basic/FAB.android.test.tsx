import { View } from 'react-primitives'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
// import { View } from "../../View";
import { Fab } from '../../Fab'
import { IconNB } from '../../IconNB'
import { Button } from '../../Button'

// Note: test renderer must be required after react-native.

// jest.mock("Platform", () => {
//   const Platform = require.requireActual("Platform");
//   Platform.OS = "android";
//  return Platform;
// });

it('renders single FAB inactive', () => {
  // const tree = renderer
  //   .create(
  //     <View style={{ flex: 1 }}>
  //       <Fab
  //         active={false}
  //         direction="up"
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="bottomRight">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //     </View>
  //   )
  //   .toJSON()
  // expect(tree).toMatchSnapshot()
})

it('renders single FAB active', () => {
  // const tree = renderer
  //   .create(
  //     <View style={{ flex: 1 }}>
  //       <Fab
  //         active={true}
  //         direction="up"
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="bottomRight">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //     </View>
  //   )
  //   .toJSON()
  // expect(tree).toMatchSnapshot()
})

it('renders multiple FAB inactive', () => {
  // const tree = renderer
  //   .create(
  //     <View style={{ flex: 1 }}>
  //       <Fab
  //         active={false}
  //         direction="up"
  //         containerStyle={{}}
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="bottomRight">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //       <Fab
  //         active={false}
  //         direction="left"
  //         containerStyle={{}}
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="topRight">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //       <Fab
  //         active={false}
  //         direction="down"
  //         containerStyle={{}}
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="topLeft">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //       <Fab
  //         active={false}
  //         direction="right"
  //         containerStyle={{}}
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="bottomLeft">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //     </View>
  //   )
  //   .toJSON()
  // expect(tree).toMatchSnapshot()
})

it('renders multiple FAB active', () => {
  // const tree = renderer
  //   .create(
  //     <View style={{ flex: 1 }}>
  //       <Fab
  //         active={true}
  //         direction="up"
  //         containerStyle={{}}
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="bottomRight">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //       <Fab
  //         active={true}
  //         direction="left"
  //         containerStyle={{}}
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="topRight">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //       <Fab
  //         active={true}
  //         direction="down"
  //         containerStyle={{}}
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="topLeft">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //       <Fab
  //         active={true}
  //         direction="right"
  //         containerStyle={{}}
  //         style={{ backgroundColor: '#5067FF' }}
  //         position="bottomLeft">
  //         <IconNB name="md-share" />
  //         <Button style={{ backgroundColor: '#34A34F' }}>
  //           <IconNB name="logo-whatsapp" />
  //         </Button>
  //         <Button style={{ backgroundColor: '#3B5998' }}>
  //           <IconNB name="logo-facebook" />
  //         </Button>
  //         <Button disabled style={{ backgroundColor: '#DD5144' }}>
  //           <IconNB name="ios-mail" />
  //         </Button>
  //       </Fab>
  //     </View>
  //   )
  //   .toJSON()
  // expect(tree).toMatchSnapshot()
})
