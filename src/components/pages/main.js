import React, { PureComponent } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Text,
  TabHeading,
  Icon,
  Button
} from "native-base";
import { StatusBar, TouchableOpacity } from "react-native";
import AllOrderComponent from "../templates/allOrder";
import PendingComponent from "../templates/pending";
import SuccessComponent from "../templates/success";
import SideBar from "../templates/drawer";
import { Drawer } from "native-base";

export default class MainComponent extends PureComponent {
  handleDetail = () => {
    this.props.navigation.navigate("OrderDetailScreen");
  };
  closeDrawer() {
    this.drawer._root.close();
  }
  openDrawer() {
    this.drawer._root.open();
  }
  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header style={{ backgroundColor: "#e50304" }}>
            <StatusBar barStyle="light-content" backgroundColor="red" />
            <Left>
              <TouchableOpacity onPress={() => this.openDrawer()}>
                <Icon
                  type="MaterialIcons"
                  name="menu"
                  style={{ color: "white", fontSize: 40 }}
                />
              </TouchableOpacity>
            </Left>
            <Body>
              <Text style={{ color: "white", fontSize: 17 }}>IHT-Đơn Hàng</Text>
            </Body>
            <Right>
              <TouchableOpacity>
                <Icon
                  type="Ionicons"
                  name="ios-contact"
                  style={{ color: "white", fontSize: 40 }}
                />
              </TouchableOpacity>
            </Right>
          </Header>
          <Tabs
            locked={true}
            tabBarUnderlineStyle={{ backgroundColor: "#e50304" }}
          >
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "white" }}>
                  <Text style={{ color: "black" }}>Tất Cả</Text>
                </TabHeading>
              }
            >
              <AllOrderComponent handleDetail={this.handleDetail} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "white" }}>
                  <Text style={{ color: "black" }}>Đang Giao</Text>
                </TabHeading>
              }
            >
              <PendingComponent handleDetail={this.handleDetail} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "white" }}>
                  <Text style={{ color: "black" }}>Hoàn Thành</Text>
                </TabHeading>
              }
            >
              <SuccessComponent handleDetail={this.handleDetail} />
            </Tab>
          </Tabs>
        </Container>
      </Drawer>
    );
  }
}