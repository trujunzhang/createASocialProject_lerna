import * as React from 'react'
import { Content, Card, CardItem, Text, Body } from '@app/native-base'

export class TabThree extends React.Component<any, any> {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                NativeBase is a free and open source framework that enables developers to build
                high-quality mobile apps using React Native iOS and Android apps with a fusion of
                ES6.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                NativeBase gives you the potential of building applications that run on iOS and
                Android using a single codebase.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
