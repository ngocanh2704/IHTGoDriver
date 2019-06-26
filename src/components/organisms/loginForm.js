import React from "react";
import { View, Item } from "native-base";
import styled from "styled-components";
import {
  Quote,
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
        placeholder="username"
        value={props.username}
        onChangeText={props.setUsername}
      />
    </Item>
    <Item>
      <Icon type="AntDesign" name="lock" />
      <Input
        placeholder="password"
        value={props.password}
        onChange={props.setPassword}
      />
    </Item>
    <Form>
      <Quote>Quên mật khẩu?</Quote>
    </Form>
    <View>
      <Button onPress={props.login} />
    </View>
  </Form>
);
