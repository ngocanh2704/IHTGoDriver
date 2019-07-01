import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Navigation from "./routes";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import { store } from "./store";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message:
        "<h2>Bật định vị đi mày</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location",
      ok: "YES",
      cancel: "NO",
      enableHighAccuracy: true,
      showDialog: true,
      openLocationServices: true,
      preventOutSideTouch: false,
      preventBackClick: false,
      providerListener: true
    })
      .then((success => {}).bind(this))
      .catch(error => {
        console.log(error.message);
      });
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
