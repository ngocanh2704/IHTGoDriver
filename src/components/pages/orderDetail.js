import React, { PureComponent } from "react";
import { Container, Tabs, Tab, TabHeading } from "native-base";
import { ItemDetail, OrderMap } from "../templates";
import { TextTitle as Text } from "../atoms";
import { MenuHeader as Header, Fab } from "../organisms";

export default class DetailComponent extends PureComponent {
  render() {
    return (
      <Container>
        <Header
          back={() => this.props.navigation.goBack()}
          title="Thông tin đơn hàng"
        />
        <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: "white" }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#c62828" }}>
                <Text>THÔNG TIN</Text>
              </TabHeading>
            }
          >
            <ItemDetail />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#c62828" }}>
                <Text>BẢN ĐỒ</Text>
              </TabHeading>
            }
          >
            <OrderMap />
          </Tab>
        </Tabs>
        <Fab rating={() => this.props.navigation.navigate("RatingScreen")} />
      </Container>
    );
  }
}
