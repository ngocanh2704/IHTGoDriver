import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Header, Left, Right } from "native-base";

export default props => (
  <Header style={{ backgroundColor: "white" }}>
    <Left>
      <TouchableOpacity onPress={props.openDrawer}>
        <Image
          style={{
            height: 40,
            width: 60,
            marginLeft: 10
          }}
          source={require("../../../assest/logo.png")}
        />
      </TouchableOpacity>
    </Left>
    <Right>
      {/* <Divider>
        <Icon type="AntDesign" name="form" />
      </Divider> */}
      {/* <Divider onPress={props.openDrawer}>
        <Icon type="AntDesign" name="setting" />
      </Divider> */}
      {/* <Divider>
        <Icon type="AntDesign" name="customerservice" />
      </Divider> */}
    </Right>
  </Header>
);
