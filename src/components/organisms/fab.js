import React, { Component } from "react";
import ActionButton from "react-native-action-button";
import { Icon } from "../atoms";
import { Linking } from "react-native";

export default class Fab extends Component {
  render() {
    const senderNumber = "123";
    const receiverNumber = "123";
    return (
      <ActionButton buttonColor="#b71c1c">
        <ActionButton.Item
          title="Gọi cho người gửi"
          onPress={() => Linking.openURL(`tel:${senderNumber}`)}
        >
          <Icon name="md-call" />
        </ActionButton.Item>
        <ActionButton.Item
          title="Gọi cho người nhận"
          onPress={() => Linking.openURL(`tel:${receiverNumber}`)}
        >
          <Icon name="md-call" />
        </ActionButton.Item>
        <ActionButton.Item title="Bắt đầu giao hàng">
          <Icon name="md-bicycle" />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}
