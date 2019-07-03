import React from "react";
import { Dimensions } from "react-native";
import { View, Item } from "native-base";
import styled from "styled-components";
import {
  InputNormal as Input,
  ButtonFilled as Button,
  DarkIcon as Icon,
  CheckBox
} from "../atoms";

const Form = styled(View)`
  margin: 20px;
`;

const Avatar = styled(View)`
  margin-left: auto;
  margin-right: auto;
`;

const responsiveFontSize = f => {
  return Math.sqrt(height * height + width * width) * (f / 100);
};
const { height, width } = Dimensions.get("window");

export default class ProFileForm extends React.PureComponent {
  render() {
    return (
      <Form>
        <Avatar>
          <Icon
            name="ios-contacts"
            style={{ fontSize: responsiveFontSize(10) }}
          />
        </Avatar>
        <Item>
          <Icon type="AntDesign" name="idcard" />
          <Input placeholder="họ và tên" />
        </Item>
        <Item>
          <Icon type="AntDesign" name="phone" />
          <Input placeholder="số điện thoại" />
        </Item>
        <Item
          style={{ borderBottomWidth: 0, paddingTop: 20, paddingBottom: 10 }}
        >
          <Icon type="AntDesign" name="user" />
          <CheckBox text="Nam" checked={true} />
          <CheckBox text="Nữ" checked={false} />
        </Item>
        <Item>
          <Icon type="AntDesign" name="enviromento" />
          <Input placeholder="địa chỉ liên hệ" />
        </Item>
        <View>
          <Button onPress={this.props.login} text="Thay đổi thông tin" />
        </View>
      </Form>
    );
  }
}
