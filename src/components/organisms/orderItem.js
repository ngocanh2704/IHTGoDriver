import React, { PureComponent } from "react";
import { Body, Card, CardItem } from "native-base";
import {
  TextNormal as Text,
  TextOrder,
  TextBadgeComplete,
  TextBadgePending,
  TextBadgeProcessing,
  DarkIcon
} from "../atoms";
import { connect } from "react-redux";
import { formatDate } from "../../utilities/formatDate";

class OrderItem extends PureComponent {
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
    else if (type === 2) return <TextBadgePending />;
    else if (type === 3) return <TextBadgeProcessing />;
    else return <TextBadgeComplete />;
  };

  formatString(str) {
    if (str) {
      let newStr = str.slice(0, 30);
      newStr += str.length > 30 ? "..." : "";
      return newStr;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.item.status !== this.props.item.status ||
      prevProps.item.name !== this.props.item.name ||
      prevProps.item.created_at !== this.props.item.created_at
    ) {
      this.setState({
        order: this.props.item
      });
    }
  }

  render() {
    return (
      <Card>
        <CardItem style={{ height: 50, paddingLeft: -10 }} bordered>
          <TextOrder>
            {this.state.order.is_speed ? (
              <DarkIcon type="AntDesign" name="rocket1" />
            ) : null}
            {this.formatString(this.state.order.name)}
          </TextOrder>
          {this.renderBadge(this.state.order.status)}
        </CardItem>
        <CardItem>
          <Body>
            <Text>{this.props.orderType[this.state.order.car_option]}</Text>
            <Text>Ngày {formatDate(this.state.order.created_at)}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default connect(state => ({
  orderType: state.constant.orderType
}))(OrderItem);
