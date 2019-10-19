import React, { PureComponent } from "react";
import { BackHandler } from "react-native";
import { Container, Tab, Tabs } from "native-base";
import {
  OrderList,
  OrderFinishList,
  OrderWaitingList,
  SideBar
} from "../templates";
import { Drawer } from "native-base";
import { TextTitle as Text, TabHeading } from "../atoms";
import { MainHeader as Header, FabRefresh } from "../organisms";
import { NavigationEvents } from "react-navigation";
import { tracking } from "../../actions/tracking";
import { connect } from "react-redux";
import firebase from "react-native-firebase";
import axios from "../../utilities/axios";
import FabQr from "../organisms/fabQr";
import {request, PERMISSIONS} from 'react-native-permissions'

class Main extends PureComponent {
  async componentDidMount() {
    this.props.dispatch(tracking(navigator.geolocation));
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      axios
        .post("driver/update-fcm", {
          fcm: fcmToken
        })
        .then(res => {
          console.log(fcmToken);
        })
        .catch(err => {});
    }
      await request(PERMISSIONS.ANDROID.CAMERA)
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
          <Tabs tabBarUnderlineStyle={{ backgroundColor: "white" }}>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#c62828" }}>
                  <Text>TẤT CẢ</Text>
                </TabHeading>
              }
            >
              <OrderList />
              <FabRefresh type={1} />
              <FabQr navigation={this.props.navigation}/>
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#c62828" }}>
                  <Text>CHƯA GIAO</Text>
                </TabHeading>
              }
            >
              <OrderWaitingList />
              <FabRefresh type={2} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#c62828" }}>
                  <Text>HOÀN THÀNH</Text>
                </TabHeading>
              }
            >
              <OrderFinishList />
              <FabRefresh type={3} />
            </Tab>
          </Tabs>
        </Container>
      </Drawer>
    );
  }
}

export default connect()(Main);
