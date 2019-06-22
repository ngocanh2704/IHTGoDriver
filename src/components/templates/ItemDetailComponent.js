import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  Card,
  CardItem,
  Text,
  Body,
  View,
  Container,
  Icon,
  Row,
  Col,
  Grid,
  Content
} from "native-base";

const responsiveFontSize = f => {
  return Math.sqrt(height * height + width * width) * (f / 100);
};
const { height, width } = Dimensions.get("window");
export default class ItemDetailComponent extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <Content style={privateStyle.container}>
          <View style={privateStyle.div}>
            <Row>
              <Icon
                name="ios-information-circle"
                style={{ paddingRight: 10, color: "#e50304" }}
              />
              <Text style={privateStyle.titleH1}>Thông tin đơn hàng</Text>
            </Row>
          </View>
          <Grid style={privateStyle.listItemContainer}>
            <Col>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.title}>8784</Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.title}>IHT20190621020</Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>Ngày tạo: 21/06/2019</Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>
                    Phương tiện vận chuyển:{" "}
                  </Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>Loại: </Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>Tổng tiền: 00000 VND</Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>Trạng thái: </Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>Ghi chú: </Text>
                </Col>
              </Row>
            </Col>
          </Grid>

          <View style={privateStyle.div}>
            <Row>
              <Icon
                name="ios-contact"
                style={{ paddingRight: 10, color: "#e50304" }}
              />
              <Text style={privateStyle.titleH1}>người gửi</Text>
            </Row>
          </View>
          <Grid style={privateStyle.listItemContainer}>
            <Col>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.title}>dddđ</Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>Địa chỉ: </Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>Phone: </Text>
                </Col>
              </Row>
            </Col>
          </Grid>

          <View style={privateStyle.div}>
            <Row>
              <Icon
                name="ios-contact"
                style={{ paddingRight: 10, color: "#e50304" }}
              />
              <Text style={privateStyle.titleH1}>Thông tin người nhận</Text>
            </Row>
          </View>
          <Grid style={privateStyle.listItemContainer}>
            <Col>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.title} />
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>Địa chỉ: </Text>
                </Col>
              </Row>
              <Row style={privateStyle.rowContainer}>
                <Col>
                  <Text style={privateStyle.content}>Phone:</Text>
                </Col>
              </Row>
            </Col>
          </Grid>

          <View style={privateStyle.div}>
            <Row>
              <Icon
                name="ios-navigate"
                style={{ paddingRight: 10, color: "#e50304" }}
              />
              <Text style={privateStyle.titleH1}>Điểm giao hàng thêm</Text>
            </Row>
          </View>
        </Content>
      </Container>
    );
  }
}

const privateStyle = {
  container: {
    padding: 10
  },
  listItemContainer: {
    padding: 0,
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderBottomColor: "#BDBDBD"
  },
  rowContainer: {
    padding: 5
  },
  div: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  rowHeader: {
    padding: 0,
    backgroundColor: "#F9FBE7",
    alignItems: "center"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    color: "#757575",
    fontSize: responsiveFontSize(2)
  },
  titleH1: {
    fontSize: responsiveFontSize(2),
    color: "#e50304"
  },
  title: {
    fontSize: responsiveFontSize(2.2),
    color: "#424242"
  },
  icon: {
    color: "#E6EE9C",
    fontSize: responsiveFontSize(3),
    paddingRight: 10
  }
};
