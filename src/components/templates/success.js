import React, { PureComponent } from "react";
import { List, Container, Content } from "native-base";
import { OrderItem } from "../organisms";

export default class SuccessComponent extends PureComponent {
  handle = () => {
    this.props.handleDetail();
  };
  render() {
    return (
      <Content>
        <List>
          <OrderItem handle={this.handle} />
        </List>
      </Content>
    );
  }
}
