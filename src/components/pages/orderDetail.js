import React, { PureComponent } from "react";
import { Container } from "native-base";
import { ItemDetail } from "../templates";
import { MenuHeader as Header, Fab } from "../organisms";

export default class DetailComponent extends PureComponent {
  render() {
    return (
      <Container>
        <Header
          back={() => this.props.navigation.goBack()}
          title="Thông tin đơn hàng"
        />
        <ItemDetail />
        <Fab />
      </Container>
    );
  }
}
