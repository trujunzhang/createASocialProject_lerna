import * as React from 'react'
import { Content, Card, CardItem, Text, Body } from "@app/native-base";

export class TabTwo extends React.Component<any, any> {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                NativeBase builds a layer on top of React Native that provides
                you with basic set of components for mobile application
                development. This helps you to build world-export class application
                experiences on native platforms.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
