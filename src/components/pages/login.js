import React, { PureComponent } from "react";
import { View, Text, Spinner } from "native-base";
import { ImageBackground, Image, StyleSheet } from "react-native";
import { LoginForm } from "../organisms";
import { connect } from "react-redux";
import { SET_USERNAME, SET_PASSWORD, SET_USER_INFO } from "../../actions/types";
import toast from "../../utilities/toast";
import localNotify from "../../utilities/localNotification";
import axios from "../../utilities/axios";
import AsyncStorage from "@react-native-community/async-storage";

class Login extends PureComponent {
  state = { isLoading: true };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // localNotify();
    await axios
      .get("driver/verify")
      .then(res => {
        this.props.dispatch({
          type: SET_USER_INFO,
          id: res.data.user.id,
          name: res.data.user.name,
          phone: res.data.user.phone,
          email: res.data.user.email
        });

        AsyncStorage.setItem("@token", res.data.token).then(() =>
          this.props.navigation.navigate("MainScreen")
        );
      })
      .catch(err => {});

    this.setState({
      isLoading: false
    });
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
    axios
      .post("login", {
        // phone: "0946336663",
        // password: "111111"
        phone: this.props.username,
        password: this.props.password
      })
      .then(res => {
        this.props.dispatch({
          type: SET_USER_INFO,
          id: res.data.id,
          name: res.data.name,
          phone: res.data.phone,
          email: res.data.email
        });
        AsyncStorage.setItem("@token", res.data.token).then(() =>
          this.props.navigation.navigate("MainScreen")
        );
      })
      .catch(err => {
        toast("Sai mật khẩu !");
      });
  };

  render() {
    return this.state.isLoading ? (
      <Spinner color="red" />
    ) : (
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
  password: state.login.password
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
