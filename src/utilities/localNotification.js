import firebase from "react-native-firebase";
import { Platform } from "react-native";

const initProps = {
  title: "My title",
  body: "my body",
  channel_id: "notification_channel_name"
};

export default (props = initProps) => {
  if (Platform.OS === "android") {
    const notification = new firebase.notifications.Notification()
      .setNotificationId("notificationId")
      .setTitle(props.title)
      .setBody(props.body)
      .setData({
        key1: "value1"
      });
    notification.android
      .setChannelId(props.channel_id)
      .android.setSmallIcon("ic_launcher");

    firebase
      .notifications()
      .displayNotification(notification)
      .catch(err => console.error(err));
  }
};
