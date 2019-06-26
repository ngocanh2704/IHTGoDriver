import styled from "styled-components";
import { Button } from "native-base";
import React from "react";
import Text from "./textInside";

const ButtonRounded = styled(Button)`
  margin-top: 20;
  width: 80%;
  height: 12%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid ${props => props.theme.mainColor};
  border-radius: 5;
  background-color: transparent;
  box-shadow: none;
`;

export default props => (
  <ButtonRounded onPress={props.onPress}>
    <Text>Đăng nhập</Text>
  </ButtonRounded>
);
