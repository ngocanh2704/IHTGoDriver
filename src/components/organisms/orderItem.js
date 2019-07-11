import React, { PureComponent } from "react";
import { Body, Card, CardItem } from "native-base";
import {
  TextNormal as Text,
  TextOrder,
  TextBadgeComplete,
  TextBadgePending,
  DarkIcon
} from "../atoms";
import { connect } from "react-redux";

class ItemComponent extends PureComponent {
  state = {
    order: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      order: this.props.item
    });
  }

  renderBadge = type => {
    if (type === 4) return <TextBadgeComplete />;
    else if (type === 2 || type === 3) return <TextBadgePending />;
    else return <TextBadgeComplete />;
  };

  render() {
    return (
      <Card key={this.state.order.id}>
        <CardItem style={{ height: 50 }}>
          <TextOrder>
            {this.state.order.is_speed ? (
              <DarkIcon type="AntDesign" name="rocket1" />
            ) : null}
            {" " + this.state.order.name}
          </TextOrder>
          {this.renderBadge(this.state.order.status)}
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              Tổng tiền:
              {this.state.order.total_price}
              VNĐ
            </Text>
            <Text>
              Loại: {this.props.orderType[this.state.order.car_option]}
            </Text>
            <Text>Ngày: {this.state.order.created_at}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default connect(state => ({
  orderType: state.constant.orderType
}))(ItemComponent);
