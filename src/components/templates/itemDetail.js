import React, { PureComponent } from "react";
import { View } from "react-native";
import { Content, Body, Card, CardItem, Fab } from "native-base";
import { TextNormal as Text, TextOrder, DarkIcon as Icon } from "../atoms";

export default class ItemDetail extends PureComponent {
  render() {
    return (
      <>
        <Content style={privateStyle.container}>
          <Card>
            <CardItem bordered>
              <Icon name="ios-information-circle" />
              <TextOrder>Thông tin đơn hàng</TextOrder>
            </CardItem>
            <CardItem>
              <Body>
                <Text>8784</Text>
                <Text>IHT20190621020</Text>
                <Text>Ngày tạo: 21/06/2019</Text>
                <Text>Phương tiện vận chuyển:</Text>
                <Text>Loại: </Text>
                <Text>Tổng tiền: 00000 VND</Text>
                <Text>Trạng thái: </Text>
                <Text>Ghi chú: </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Icon name="ios-contact" />
              <TextOrder>người gửi</TextOrder>
            </CardItem>
            <CardItem>
              <Body>
                <Text>dddđ</Text>
                <Text>Địa chỉ: </Text>
                <Text>Phone: </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Icon name="ios-contact" />
              <TextOrder>Thông tin người nhận</TextOrder>
            </CardItem>
            <CardItem>
              <Body>
                <Text />
                <Text>Địa chỉ: </Text>
                <Text>Phone:</Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Icon name="ios-navigate" />
              <TextOrder>Điểm giao hàng thêm</TextOrder>
            </CardItem>
          </Card>
          <View style={{ flex: 1 }}>
            <Fab
              active={false}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: "red" }}
              position="bottomRight"
            >
              <Icon type="AntDesign" name="phone" />
            </Fab>
          </View>
        </Content>
      </>
    );
  }
}

const privateStyle = {
  container: {
    padding: 5
  }
};
