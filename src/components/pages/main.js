import React, { PureComponent } from "react";
import { BackHandler } from "react-native";
import { Container, Tab, Tabs } from "native-base";
import { AllOrder, Pending, Success, SideBar } from "../templates";
import { Drawer } from "native-base";
import { TextTitle as Text, TabHeading } from "../atoms";
import { MainHeader as Header } from "../organisms";
import { NavigationEvents } from "react-navigation";
import axios from "../../utilities/axios";

export default class Main extends PureComponent {
  componentDidMount() {
    axios
      .post("driver/orders", {
        pageSize: 10,
        page: 1,
        status: 4
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  _onBlurr = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  };

  _onFocus = () => {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  };

  handleBackButton = () => {
    return true;
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  navigateToDetail = id => {
    this.props.navigation.navigate("OrderDetailScreen");
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.props.navigation} />}
        onClose={this.closeDrawer}
      >
        <Container>
          <NavigationEvents
            onWillFocus={this._onFocus}
            onWillBlur={this._onBlurr}
          />
          <Header openDrawer={this.openDrawer} />
          <Tabs
            locked={true}
            tabBarUnderlineStyle={{ backgroundColor: "white" }}
          >
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#c62828" }}>
                  <Text>TẤT CẢ</Text>
                </TabHeading>
              }
            >
              <AllOrder navigate={this.navigateToDetail} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#c62828" }}>
                  <Text>CHƯA GIAO</Text>
                </TabHeading>
              }
            >
              <Pending />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#c62828" }}>
                  <Text>HOÀN THÀNH</Text>
                </TabHeading>
              }
            >
              <Success />
            </Tab>
          </Tabs>
        </Container>
      </Drawer>
    );
  }
}
