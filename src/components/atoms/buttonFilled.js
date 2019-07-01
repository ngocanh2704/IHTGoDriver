import styled from "styled-components";
import { Button } from "native-base";
import React from "react";
import Text from "./texts/textInside";

const ButtonFilled = styled(Button)`
  margin-top: 20;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 5;
  background-color: ${props => props.theme.mainColor};
`;

export default props => (
  <ButtonFilled onPress={props.onPress}>
    <Text>{props.text}</Text>
  </ButtonFilled>
);
