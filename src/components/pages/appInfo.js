import React, { PureComponent } from "react";
import { Container, Content, Body, Card, CardItem } from "native-base";
import { TextNormal as Text, TextOrder, DarkIcon as Icon } from "../atoms";
import { MenuHeader as Header } from "../organisms";

export default class AppInfo extends PureComponent {
  render() {
    return (
      <Container>
        <Header
          back={() => this.props.navigation.goBack()}
          title="Thông tin ứng dụng"
        />
        <Content style={{ margin: 10 }}>
          <Card>
            <CardItem bordered header>
              <Icon type="AntDesign" name="infocirlceo" />
              <TextOrder>Ứng dụng</TextOrder>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Số phiên bản: 2.0</Text>
                <Text>Mã người dùng: 123456</Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered header>
              <Icon type="AntDesign" name="mobile1" />
              <TextOrder>Hệ thống</TextOrder>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Tên thiết bị: 234</Text>
                <Text>ID: </Text>
                <Text>Hệ điều hành: </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered header>
              <Icon name="md-apps" />
              <TextOrder>Credits</TextOrder>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Author: NAD</Text>
                <Text>Copyrights by IHT GO, 2019</Text>
                <Text>All right reserved</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
