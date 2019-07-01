import React, { PureComponent } from "react";
import { Container } from "native-base";
import { MenuHeader as Header, ChangePasswordForm } from "../organisms";

export default class ChangePassword extends PureComponent {
  render() {
    return (
      <Container>
        <Header
          back={() => this.props.navigation.goBack()}
          title="Thay đổi mật khẩu"
        />
        <ChangePasswordForm />
      </Container>
    );
  }
}
