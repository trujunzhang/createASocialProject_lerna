import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "@app/native-base";

import styles from "./styles";

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            alignItems: "center",
            marginBottom: 50,
            backgroundColor: "transparent"
          }}
        >
          <H3 style={styles.text}>App to showcase</H3>
          <View style={{ marginTop: 8 }} />
          <H3 style={styles.text}>NativeBase components</H3>
          <View style={{ marginTop: 8 }} />
        </View>
        <View style={{ marginBottom: 80 }}>
          <Button
            style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Text>Lets Go!</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default Home;
