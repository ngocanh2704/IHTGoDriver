import React from "react";
import { Dimensions } from "react-native";
import { View, Item } from "native-base";
import styled from "styled-components";
import {
  InputNormal as Input,
  ButtonFilled as Button,
  DarkIcon as Icon
} from "../atoms";
import { connect } from "react-redux";
import { SET_NAME, SET_EMAIL, SET_PHONE } from "../../actions/types";
import { emailValidate } from "../../utilities/regex";

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

class ProFileForm extends React.PureComponent {
  state = {
    id: "",
    name: "",
    phone: "",
    email: ""
  };

  componentDidMount() {
    const { id, name, phone, email } = this.props;
    this.setState({
      id,
      name,
      phone,
      email
    });
  }

  changeInfo = () => {
    const { email } = this.state;
    if (!emailValidate(email)) {
      this.props.alert.alertWithType("error", "Lỗi", "Email không hợp lệ");
      return null;
    }
  };

  changeInput = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, phone, email } = this.state;

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
          <Input
            placeholder="họ và tên"
            value={name}
            onChangeText={txt => this.changeInput("name", txt)}
          />
        </Item>
        <Item>
          <Icon type="AntDesign" name="phone" />
          <Input
            placeholder="số điện thoại"
            value={phone}
            keyboardType="numeric"
            onChangeText={txt => this.changeInput("phone", txt)}
          />
        </Item>
        <Item>
          <Icon type="AntDesign" name="mail" />
          <Input
            placeholder="email"
            value={email}
            onChangeText={txt => this.changeInput("email", txt)}
          />
        </Item>
        <View>
          <Button onPress={this.changeInfo} text="Thay đổi thông tin" />
        </View>
      </Form>
    );
  }
}

export default connect(state => ({
  id: state.userInfo.id,
  name: state.userInfo.name,
  phone: state.userInfo.phone,
  email: state.userInfo.email,
  alert: state.alert.alert
}))(ProFileForm);
