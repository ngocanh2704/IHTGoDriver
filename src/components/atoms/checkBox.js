import React from "react";
import { CheckBox, Body } from "native-base";
import { TextNormal as Text } from "../atoms";

export default props => (
  <>
    <CheckBox checked={true} color="#c62828" />
    <Body>
      <Text style={{ marginLeft: -70 }}>{props.text}</Text>
    </Body>
  </>
);
