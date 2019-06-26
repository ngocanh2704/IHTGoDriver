import React, { PureComponent } from "react";
import { Container, Header, Tab, Tabs, Left, Right } from "native-base";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { AllOrder, Pending, Success, SideBar } from "../templates";
import { Drawer } from "native-base";
import { TextTitle as Text, DarkIcon as Icon, TabHeading } from "../atoms";
import styled from "styled-components";

const Divider = styled(TouchableOpacity)`
  margin-right: 20px;
`;

export default class MainComponent extends PureComponent {
  handleDetail = () => {
    this.props.navigation.navigate("OrderDetailScreen");
  };
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={this.closeDrawer}
      >
        <Container>
          <Header style={{ backgroundColor: "white" }}>
            <StatusBar barStyle="light-content" backgroundColor="red" />
            <Left>
              <TouchableOpacity onPress={this.openDrawer}>
                <Icon type="AntDesign" name="setting" />
              </TouchableOpacity>
            </Left>
            <Right>
              <Divider>
                <Icon type="AntDesign" name="form" />
              </Divider>
              <Divider>
                <Icon type="AntDesign" name="customerservice" />
              </Divider>
            </Right>
          </Header>
          <Tabs
            locked={true}
            tabBarUnderlineStyle={{ backgroundColor: "white" }}
          >
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#E40202" }}>
                  <Text>TẤT CẢ</Text>
                </TabHeading>
              }
            >
              <AllOrder handleDetail={this.handleDetail} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#E40202" }}>
                  <Text>ĐANG GIAO</Text>
                </TabHeading>
              }
            >
              <Pending handleDetail={this.handleDetail} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#E40202" }}>
                  <Text>HOÀN THÀNH</Text>
                </TabHeading>
              }
            >
              <Success handleDetail={this.handleDetail} />
            </Tab>
          </Tabs>
        </Container>
      </Drawer>
    );
  }
}
