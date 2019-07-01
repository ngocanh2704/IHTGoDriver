import React from "react";
import { CheckBox } from "react-native-elements";

export default props => (
  <CheckBox
    title={props.text}
    checked={props.checked}
    containerStyle={{
      backgroundColor: "white",
      borderWidth: 0
    }}
    checkedColor="#c62828"
    size={20}
    textStyle={{
      fontWeight: "normal"
    }}
  />
);
