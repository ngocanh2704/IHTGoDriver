import React, { PureComponent } from "react";
import { View, Text } from "native-base";
import { ImageBackground, Image, StyleSheet } from "react-native";
import { LoginForm } from "../organisms";
import { connect } from "react-redux";
import { SET_USERNAME, SET_PASSWORD } from "../../actions/types";
import toast from "../../utilities/toast";
import localNotify from "../../utilities/localNotification";
import axios from "../../utilities/axios";
import AsyncStorage from "@react-native-community/async-storage";

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
    toast("Sai mật khẩu !");
    axios
      .post("driver/login", { phone: "0946336663", password: "111111" })
      .then(res => {
        console.log(res.data);
        AsyncStorage.setItem("@token", res.data.token);
        this.props.navigation.navigate("MainScreen");
      })
      .catch(err => console.log(err));

    this.props.alert.alertWithType(
      "error",
      "có đơn hàng mới",
      "#12345 cần ship gấp qua Mỹ"
    );
  };

  render() {
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
