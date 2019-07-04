import React, { PureComponent } from "react";
import { Body, Card, CardItem } from "native-base";
import {
  TextNormal as Text,
  TextOrder,
  TextBadgeComplete,
  TextBadgePending
} from "../atoms";

export default class ItemComponent extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderBadge = () => {
    const { type } = this.props;
    if (type === 1) {
      return <TextBadgeComplete />;
    } else if (type === 2) {
      return <TextBadgePending />;
    }
  };
  render() {
    return (
      <Card>
        <CardItem style={{ height: 50 }}>
          <TextOrder>Tên đơn hàng</TextOrder>
          {this.renderBadge()}
        </CardItem>
        <CardItem>
          <Body>
            <Text>Tổng tiền: 12345 VNĐ</Text>
            <Text>Loại: giao thường</Text>
            <Text>Ngày: 1/1/2020</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

ItemComponent.defaultProps = {
  type: 1
};
