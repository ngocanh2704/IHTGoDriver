import React from "react";
import { View, Item } from "native-base";
import styled from "styled-components";
import {
  InputNormal as Input,
  ButtonFilled as Button,
  DarkIcon as Icon
} from "../atoms";

const Form = styled(View)`
  margin: 20px;
`;

export default props => (
  <Form>
    <Item>
      <Icon type="AntDesign" name="unlock" />
      <Input
        placeholder="mật khẩu cũ"
        value={props.username}
        onChangeText={props.setUsername}
      />
    </Item>
    <Item>
      <Icon type="AntDesign" name="lock" />
      <Input
        placeholder="mật khẩu mới"
        value={props.password}
        onChange={props.setPassword}
      />
    </Item>
    <Item>
      <Icon type="AntDesign" name="lock" />
      <Input
        placeholder="nhập lại mật khẩu mới"
        value={props.password}
        onChange={props.setPassword}
      />
    </Item>
    <Button onPress={props.login} text="Đổi mật khẩu" />
  </Form>
);
