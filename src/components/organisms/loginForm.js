import React from "react";
import Input from "../atoms/inputNormal";
import { View, Item, Icon } from "native-base";
import styled from "styled-components";

const Form = styled(View)`
  margin-top: 20px;
`;

export default props => (
  <Form>
    <Item>
      <Icon
        type="AntDesign"
        name="user"
        style={{
          color: "#e50304"
        }}
      />
      <Input placeholder="User name" />
    </Item>
    <Item>
      <Icon
        type="AntDesign"
        name="lock"
        style={{
          color: "#e50304"
        }}
      />
      <Input placeholder="Password" />
    </Item>
  </Form>
);
