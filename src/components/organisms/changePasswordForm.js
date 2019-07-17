import React from "react";
import { View, Item } from "native-base";
import styled from "styled-components";
import {
  InputNormal as Input,
  ButtonFilled as Button,
  DarkIcon as Icon
} from "../atoms";
import { connect } from "react-redux";

const Form = styled(View)`
  margin: 20px;
`;

class ChangePassword extends React.PureComponent {
  state = {
    old_pwd: "",
    new_pwd: "",
    renew_pwd: ""
  };

  changeInput = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  changePassword = () => {
    let msg = null;
    if (this.state.new_pwd.length < 8) msg = "Mật khẩu phải dài hơn 8 ký tự";
    else if (this.state.new_pwd !== this.state.renew_pwd)
      msg = "Mật khẩu xác nhận không trùng khớp";

    msg && this.props.alert.alertWithType("error", "Lỗi", msg);

    axios
      .post("driver/change-passwd", {
        old_pwd: this.state.old_pwd,
        new_pwd: this.state.new_pwd
      })
      .then(res => {
        this.props.alert.alertWithType(
          "success",
          "Thành công",
          "Đổi mật khẩu thành công"
        );
      })
      .catch(err => {
        this.props.alert.alertWithType("error", "Lỗi", "Lỗi hệ thống");
      });
  };

  render() {
    return (
      <Form>
        <Item>
          <Icon type="AntDesign" name="unlock" />
          <Input
            placeholder="mật khẩu cũ"
            value={this.state.old_pwd}
            onChangeText={txt => this.changeInput("old_pwd", txt)}
            secureTextEntry={true}
          />
        </Item>
        <Item>
          <Icon type="AntDesign" name="lock" />
          <Input
            placeholder="mật khẩu mới"
            value={this.state.new_pwd}
            onChangeText={txt => this.changeInput("new_pwd", txt)}
            secureTextEntry={true}
          />
        </Item>
        <Item>
          <Icon type="AntDesign" name="lock" />
          <Input
            placeholder="nhập lại mật khẩu mới"
            value={this.state.renew_pwd}
            onChangeText={txt => this.changeInput("renew_pwd", txt)}
            secureTextEntry={true}
          />
        </Item>
        <Button
          onPress={this.changePassword}
          text="Đổi mật khẩu"
          style={{ marginBottom: 20 }}
        />
      </Form>
    );
  }
}

export default connect(state => ({
  alert: state.alert.alert
}))(ChangePassword);
