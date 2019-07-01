import React, { PureComponent } from "react";
import { List, Content } from "native-base";
import { OrderItem } from "../../organisms";

export default class OrderCompleted extends PureComponent {
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
