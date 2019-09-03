import React from "react";
import { View, Item } from "native-base";
import styled from "styled-components";
import {
  InputNormal as Input,
  ButtonFilled as Button,
  DarkIcon as Icon
} from "../atoms";

const Form = styled(View)`
  margin-top: 20px;
`;

export default props => (
  <Form>
    <Item>
      <Icon type="AntDesign" name="user" />
      <Input
        placeholder="số điện thoại"
        keyboardType="numeric"
        value={props.username}
        onChangeText={props.setUsername}
      />
    </Item>
    <Item>
      <Icon type="AntDesign" name="lock" />
      <Input
        placeholder="mật khẩu"
        value={props.password}
        onChangeText={props.setPassword}
        secureTextEntry={true}
      />
    </Item>
    <View>
      <Button onPress={props.login} text="Đăng nhập" />
    </View>
  </Form>
);
