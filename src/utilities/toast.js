import { ToastAndroid } from "react-native";

export default (
  msg,
  duration = ToastAndroid.LONG,
  position = ToastAndroid.CENTER
) => {
  ToastAndroid.showWithGravity(msg, duration, position);
};
