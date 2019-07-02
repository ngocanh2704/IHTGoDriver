import React, { PureComponent } from "react";
import { View, Text } from "native-base";
import { ImageBackground, Image, StyleSheet, Platform } from "react-native";
import { LoginForm } from "../organisms";
import { connect } from "react-redux";
import { SET_USERNAME, SET_PASSWORD } from "../../actions/types";
import toast from "../../utilities/toast";
import localNotify from "../../utilities/localNotification";

class Login extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    localNotify();
  }

  handleChangeUsername = event => {
    this.props.dispatch({
      type: SET_USERNAME,
      username: event
    });
  };

  handleChangePassword = event => {
    this.props.dispatch({
      type: SET_PASSWORD,
      password: event
    });
  };

  submitLogin = () => {
    this.props.alert.alertWithType("error", "Error", "12345678");
    this.props.navigation.navigate("MainScreen");
    if (this.props.username === "admin")
      this.props.navigation.navigate("MainScreen");
    else toast("Sai mật khẩu !");
  };

  render() {
    console.log();
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
          <LoginForm
            username={this.props.username}
            password={this.props.password}
            setUsername={this.handleChangeUsername}
            setPassword={this.handleChangePassword}
            login={this.submitLogin}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default connect(state => ({
  username: state.login.username,
  alert: state.alert.alert
}))(Login);

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
