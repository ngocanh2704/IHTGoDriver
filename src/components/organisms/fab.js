import React, { PureComponent } from "react";
import ActionButton from "react-native-action-button";
import { Icon } from "../atoms";
import { Linking } from "react-native";
import { connect } from "react-redux";
import { SET_ORDER_BOOKMARK } from "../../actions/types";

class Fab extends PureComponent {
  startShipping = () => {
    this.props.dispatch({
      type: SET_ORDER_BOOKMARK,
      id: this.props.id
    });
  };

  render() {
    const {
      id,
      current_status,
      sender_number,
      receive_number,
      order_processing
    } = this.props;
    return (
      <ActionButton buttonColor="#b71c1c">
        <ActionButton.Item
          title="Gọi cho người gửi"
          onPress={() => Linking.openURL(`tel:${sender_number}`)}
        >
          <Icon name="md-call" />
        </ActionButton.Item>
        <ActionButton.Item
          title="Gọi cho người nhận"
          onPress={() => Linking.openURL(`tel:${receive_number}`)}
        >
          <Icon name="md-call" />
        </ActionButton.Item>
        {current_status === 2 && (
          <ActionButton.Item
            title="Bắt đầu giao hàng"
            onPress={this.startShipping}
          >
            <Icon name="md-bicycle" />
          </ActionButton.Item>
        )}
        {this.props.order_processing.includes(id) && (
          <ActionButton.Item title="Hoàn thành đơn hàng">
            <Icon name="md-bicycle" />
          </ActionButton.Item>
        )}
      </ActionButton>
    );
  }
}

export default connect(state => ({
  id: state.constant.id,
  sender_number: state.constant.sender_number,
  receive_number: state.constant.receive_number,
  current_status: state.constant.current_status,
  order_processing: state.constant.order_processing
}))(Fab);
