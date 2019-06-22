import React, { Component } from "react";
import { View, Input, Item, Icon, Button, Text } from "native-base";
import { ImageBackground, Image, StyleSheet } from "react-native";

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assest/1.jpg")}
        style={styles.imageBackGround}
      >
        <View style={styles.content}>
          <Image style={styles.logo} source={require("../../../assest/logo.png")} />
          <Text
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: 20,
              fontWeight: "bold",
              color: "#e50304"
            }}
          >
            EXPRESS SERVICES
          </Text>
          <Item>
            <Icon type="FontAwesome" name="user-o" />
            <Input
              placeholder="User name"
              returnKeyType="next"
              autoCorrect={false}
              getRef={input => {
                this.username = input;
              }}
              onSubmitEditing={() => {
                this.password._root.focus();
              }}
              onChangeText={email => {
                this.setState({
                  email: email
                });
              }}
            />
          </Item>
          <Item>
            <Icon type="AntDesign" name="lock" />
            <Input
              placeholder="Password"
              returnKeyType="go"
              autoCorrect={false}
              secureTextEntry={true}
              ref={input => {
                this.password = input;
              }}
              onSubmitEditing={() => {
                this.password._root.focus();
              }}
              onChangeText={password => {
                this.setState({
                  password: password
                });
              }}
            />
          </Item>
          <Button
            style={styles.btnLogin}
            onPress={() => this.props.navigation.navigate('MainScreen')}
          >
            <Text style={{ marginLeft: "auto", marginRight: "auto" }}>
              Đăng nhập hệ thống
            </Text>
          </Button>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  imageBackGround: {
    width: "100%",
    height: "100%"
  },
  logo: {
    height: 100,
    width: 145,
    marginLeft: "auto",
    marginRight: "auto"
  },
  content: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 20,
    marginRight: 20
  },
  btnLogin: {
    marginTop: 20,
    width: "80%",
    height: "12%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#e50304",
    borderRadius: 20
  }
});
