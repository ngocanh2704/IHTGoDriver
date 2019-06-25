import React, { PureComponent } from "react";
import { View, Text } from "native-base";
import { ImageBackground, Image, StyleSheet } from "react-native";
import ButtonRounded from "./../atoms/buttonRounded";
import LoginForm from "../organisms/loginForm";
import { connect, mapStateToProps } from "react-redux";

class LoginComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    console.log("login" + this.props.title);
    return (
      <ImageBackground
        source={require("../../../assest/1.jpg")}
        style={styles.imageBackGround}
      >
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require("../../../assest/logo.png")}
          />
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
          <LoginForm />
          <ButtonRounded
            onPress={() => {
              this.props.dispatch({
                type: "set_username",
                value: "2345"
              });
              console.log(this.state.email);
              // this.props.navigation.navigate("MainScreen");
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default connect(state => ({
  title: state.login.title
}))(LoginComponent);

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
  }
});
