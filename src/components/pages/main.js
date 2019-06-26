import React, { PureComponent } from "react";
import { Container, Tab, Tabs } from "native-base";
import { AllOrder, Pending, Success, SideBar } from "../templates";
import { Drawer } from "native-base";
import { TextTitle as Text, TabHeading } from "../atoms";
import { MainHeader as Header } from "../organisms";

export default class MainComponent extends PureComponent {
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
        content={<SideBar navigator={this.navigator} />}
        onClose={this.closeDrawer}
      >
        <Container>
          <Header openDrawer={this.openDrawer} />
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
              <AllOrder navigate={this.navigateToDetail} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#E40202" }}>
                  <Text>ĐANG GIAO</Text>
                </TabHeading>
              }
            >
              <Pending />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: "#E40202" }}>
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
