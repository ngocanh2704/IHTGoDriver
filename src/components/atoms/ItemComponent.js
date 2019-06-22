import React, { Component } from "react";
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Button,
  Text
} from "native-base";
import { TouchableOpacity } from "react-native";

export default class ItemComponent extends Component {
    handleDetail = () => {
        this.props.handle();
      };
  render() {
    return (
        <ListItem>
        <TouchableOpacity
        onPress={()=>this.handleDetail()}
        >
          <Body>
            <Text style={{ color: "green", fontSize: 12 }}>
              7255 iht di tan binh
            </Text>
            <Text note numberOfLines={1}>
              Its time to build a difference . .
            </Text>
            <Text note numberOfLines={1}>
              Its time to build a difference . .
            </Text>
            <Text note numberOfLines={1}>
              Its time to build a difference . .
            </Text>
            <Text note numberOfLines={1}>
              Its time to build a difference . .
            </Text>
            <Text note numberOfLines={1}>
              Its time to build a difference . .
            </Text>
          </Body>
          </TouchableOpacity>
        </ListItem>
    );
  }
}
