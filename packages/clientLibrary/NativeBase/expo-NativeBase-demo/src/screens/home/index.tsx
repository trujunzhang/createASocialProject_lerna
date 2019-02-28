import * as React from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Content } from "@app/native-base";

import styles from "./styles";

class Home extends React.Component<any, any>{
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Content padder>
          <View
            style={{
              alignItems: "center",
              marginTop: 150,
              // marginBottom: 50,
              // backgroundColor: "transparent"
              backgroundColor: "red"
            }}
          >
            <H3 style={styles.text}>App to showcase</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>NativeBase components</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={[{ marginTop: 80 }, {
            backgroundColor: "blue"
          }]}>
            <Button
              onPress={() => {
                debugger
                this.props.navigation.navigate("DrawerOpen")
              }
              }
            >
              <Text>{'Lets Go!'}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
