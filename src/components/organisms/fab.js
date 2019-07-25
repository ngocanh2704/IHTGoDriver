import React, { PureComponent } from "react";
import ActionButton from "react-native-action-button";
import { Icon } from "../atoms";
import { Linking } from "react-native";
import { connect } from "react-redux";
import axios from "../../utilities/axios";
import { startShipping, finishShipping } from "../../actions/shipping";

class Fab extends PureComponent {
  _startShipping = () => {
    const { id } = this.props;
    axios
      .get("driver/order-start/" + id)
      .then(res => this.props.dispatch(startShipping(id)))
      .catch(err => {});
  };

  _finishShipping = () => {
    axios
      .get("driver/order-finish/" + this.props.id)
      .then(res => this.props.dispatch(finishShipping(this.props.id)))
      .catch(err => {});
  };

  render() {
    const { current_status, sender_number, receive_number } = this.props;

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
        {current_status == 2 && (
          <ActionButton.Item
            title="Bắt đầu giao hàng"
            onPress={this._startShipping}
          >
            <Icon name="md-bicycle" />
          </ActionButton.Item>
        )}
        {current_status == 3 && (
          <ActionButton.Item
            title="Hoàn thành đơn hàng"
            onPress={this._finishShipping}
          >
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
  current_status: state.constant.current_status
}))(Fab);
