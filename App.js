import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Navigation from "./routes";
// import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import { store } from "./store";
import firebase from "react-native-firebase";
import AsyncStorage from "@react-native-community/async-storage";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   LocationServicesDialogBox.checkLocationServicesIsEnabled({
  //     message:
  //       "<h2>Bật định vị đi mày</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location",
  //     ok: "YES",
  //     cancel: "NO",
  //     enableHighAccuracy: true,
  //     showDialog: true,
  //     openLocationServices: true,
  //     preventOutSideTouch: false,
  //     preventBackClick: false,
  //     providerListener: true
  //   })
  //     .then((success => {}).bind(this))
  //     .catch(error => {
  //       console.log(error.message);
  //     });
  // }

  async componentDidMount() {
    this.checkPermission();
  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      console.log("has Token");
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem("fcmToken", fcmToken);
      }
    } else {
      // get message
      console.log(fcmToken);
    }
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log("permission rejected");
    }
  }

  render() {
    return (
      <>
        <StatusBar hidden={true} />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Navigation />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default App;
