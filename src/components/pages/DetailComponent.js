import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Tabs,
  TabHeading,
  Tab
} from "native-base";
import ItemDetailComponent from "../templates/ItemDetailComponent";

export default class DetailComponent extends Component {
  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#e50304"}}
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "white", fontSize: 17 }}>
              Chi tiết đơn hàng
            </Text>
          </Body>
          <Right />
        </Header>
        <Tabs
          locked={true}
          tabBarUnderlineStyle={{ backgroundColor: "#e50304" }}
        >
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Text style={{ color: "black" }}>Thông Tin</Text>
              </TabHeading>
            }
          >
            <ItemDetailComponent />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Text style={{ color: "black" }}>Bản Đồ</Text>
              </TabHeading>
            }
          />
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "white" }}>
                <Text style={{ color: "black" }}>Chat</Text>
              </TabHeading>
            }
          />
        </Tabs>
      </Container>
    );
  }
}
