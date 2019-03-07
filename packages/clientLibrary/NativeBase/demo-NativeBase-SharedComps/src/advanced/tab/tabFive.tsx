import * as React from 'react'
import { Content, Card, CardItem, Text, Body } from "@app/native-base";

export class TabFive extends React.Component<any, any> {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                DOESN'T SUPPORT ADVANCED TABS :( numquam non magnam praesentium,
                maxime quaerat!
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
