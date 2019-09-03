import React, { PureComponent } from "react";
import { Container, Content, Body, Card, CardItem } from "native-base";
import { TextNormal as Text, TextOrder, DarkIcon as Icon } from "../atoms";
import { MenuHeader as Header } from "../organisms";
import { connect } from "react-redux";

class AppInfo extends PureComponent {
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
                <Text>Mã người dùng: </Text>
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
                <Text>
                  Location: {this.props.lat} - {this.props.lng}
                  {this.props.error}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default connect(state => ({
  lat: state.location.lat,
  lng: state.location.lng,
  error: state.location.error
}))(AppInfo);
