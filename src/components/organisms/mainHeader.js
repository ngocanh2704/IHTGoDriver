import React from "react";
import styled from "styled-components";
import { Image, TouchableOpacity } from "react-native";
import { DarkIcon as Icon } from "../atoms";
import { Header, Left, Right } from "native-base";

const Divider = styled(TouchableOpacity)`
  margin-right: 10px;
  margin-left: 20px;
`;

export default props => (
  <Header style={{ backgroundColor: "white" }}>
    <Left>
      <Image
        style={{
          height: 40,
          width: 60,
          marginLeft: 10
        }}
        source={require("../../../assest/logo.png")}
      />
    </Left>
    <Right>
      <Divider>
        <Icon type="AntDesign" name="form" />
      </Divider>
      <Divider onPress={props.openDrawer}>
        <Icon type="AntDesign" name="setting" />
      </Divider>
      <Divider>
        <Icon type="AntDesign" name="customerservice" />
      </Divider>
    </Right>
  </Header>
);
