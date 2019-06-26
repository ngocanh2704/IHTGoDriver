import React, { PureComponent } from "react";
import {
  Container,
  Header,
  Body,
  Left,
  Right,
  Button,
  Tabs,
  Tab
} from "native-base";
import { ItemDetail, OrderMap } from "../templates";
import { TextTitle as Text, DarkIcon as Icon, TabHeading } from "../atoms";

export default class DetailComponent extends PureComponent {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "#e50304", fontSize: 17 }}>
              Chi tiết đơn hàng
            </Text>
          </Body>
          <Right />
        </Header>
        <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: "white" }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#E40202" }}>
                <Text>THÔNG TIN</Text>
              </TabHeading>
            }
          >
            <ItemDetail />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#E40202" }}>
                <Text>BẢN ĐỒ</Text>
              </TabHeading>
            }
          >
            <OrderMap />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#E40202" }}>
                <Text>CHAT</Text>
              </TabHeading>
            }
          />
        </Tabs>
      </Container>
    );
  }
}
