import styled from "styled-components";
import { Button, Text } from "native-base";
import React from "react";

const ButtonRounded = styled(Button)`
  margin-top: 20;
  width: 80%;
  height: 12%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #e50304;
  border-radius: 5;
  background-color: transparent;
  box-shadow: none;
`;

const CustomText = styled(Text)`
  margin-left: auto;
  margin-right: auto;
  color: #e50304;
`;

export default props => (
  <ButtonRounded onPress={props.onPress}>
    <CustomText>Đăng nhập</CustomText>
  </ButtonRounded>
);
