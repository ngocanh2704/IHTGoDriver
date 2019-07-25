import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Navigation from "./routes";
import { store } from "./store";
import { Platform, StatusBar } from "react-native";
import firebase from "react-native-firebase";
import DropdownAlert from "react-native-dropdownalert";
import {
  SET_ALERT,
  ADD_ALL_ORDER,
  ADD_WAITING_ORDER,
  REMOVE_ORDER
} from "./src/actions/types";
import axios from "./src/utilities/axios";
import localNotification from "./src/utilities/localNotification";
import { DeviceEventEmitter } from "react-native";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

navigator.geolocation = require("@react-native-community/geolocation");

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.checkIsLocation().catch(error => error);
    DeviceEventEmitter.addListener("locationProviderStatusChange", function(
      status
    ) {});
  }

  async checkIsLocation() {
    let check = await LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message: "Use Location ?",
      ok: "YES",
      cancel: "NO",
      enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
      showDialog: true, // false => Opens the Location access page directly
      openLocationServices: true, // false => Directly catch method is called if location services are turned off
      preventOutSideTouch: false, //true => To prevent the location services window from closing when it is clicked outside
      preventBackClick: false, //true => To prevent the location services popup from closing when it is clicked back button
      providerListener: true // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
    }).catch(error => error);

    return Object.is(check.status, "enabled");
  }

  subscribeToNotificationListeners() {
    const channel = new firebase.notifications.Android.Channel(
      "notification_channel_name",
      "Notifications",
      firebase.notifications.Android.Importance.Max
    ).setDescription(
      "A Channel To manage the notifications related to Application"
    );
    firebase.notifications().android.createChannel(channel);

    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        if (notification.data.action == 1) {
          this.deleteOrder(notification.data.order_id);
        } else {
          this.comingOrder(notification.data.order_id);
          //display if foreground
          this.displayNotification(notification);
          //display if online
          store
            .getState()
            .alert.alert.alertWithType(
              "error",
              notification.title,
              notification.body
            );
        }
      });
  }

  deleteOrder = order_id => {
    store.dispatch({
      type: REMOVE_ORDER,
      id: order_id
    });
  };

  comingOrder = order_id => {
    axios
      .post("driver/get-order", {
        order_id
      })
      .then(res => {
        store.dispatch({
          type: ADD_ALL_ORDER,
          order: res.data
        });
        store.dispatch({
          type: ADD_WAITING_ORDER,
          order: res.data
        });
      })
      .catch(err => {});
  };

  displayNotification = notification => {
    if (Platform.OS === "android") {
      const localNotification = new firebase.notifications.Notification({
        sound: "default",
        show_in_foreground: true
      })
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setSubtitle(notification.subtitle)
        .setBody(notification.body)
        .setData(notification.data)
        .android.setChannelId("notification_channel_name")
        .android.setSmallIcon("ic_launcher")
        .android.setPriority(firebase.notifications.Android.Priority.High);

      firebase
        .notifications()
        .displayNotification(localNotification)
        .catch(err => {});
    }
  };

  componentDidMount() {
    firebase
      .messaging()
      .hasPermission()
      .then(hasPermission => {
        if (hasPermission) {
          this.subscribeToNotificationListeners();
        } else {
          firebase
            .messaging()
            .requestPermission()
            .then(() => {
              this.subscribeToNotificationListeners();
            })
            .catch(error => {});
        }
      });
  }

  componentWillUnmount() {
    this.notificationListener();
    LocationServicesDialogBox.stopListener();
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
        <DropdownAlert
          ref={ref => {
            store.dispatch({
              type: SET_ALERT,
              alert: ref
            });
          }}
        />
      </>
    );
  }
}

export default App;
