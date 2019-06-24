import React, { Component } from "react";
import { Text, View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { Row, Col, Icon } from "native-base";

const responsiveFontSize = f => {
  return Math.sqrt(height * height + width * width) * (f / 100);
};
const { height, width } = Dimensions.get("window");

export default class DrawerComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Row size={3}>
            <Col style={privateStyle.center}>
              <Icon
                name="ios-contacts"
                style={{ fontSize: responsiveFontSize(10), color: "#fff" }}
              />
              <Text style={styles.header_id}>name</Text>
              <Text style={styles.pointText}>Phone</Text>
              <Text style={styles.pointText}>Email</Text>
            </Col>
          </Row>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.menu_item}>
            <Col size={1} style={privateStyle.center}>
              <Icon
                name="ios-information-circle-outline"
                style={{ fontSize: 30, color: "#03A9F4" }}
              />
            </Col>
            <Col size={5}>
              <Text style={styles.menu_text}>Thông tin chung</Text>
            </Col>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menu_item}>
            <Col size={1} style={privateStyle.center}>
              <Icon
                name="ios-list-box-outline"
                style={{ fontSize: 30, color: "#FF9800" }}
              />
            </Col>
            <Col size={5}>
              <Text style={styles.menu_text}>Tạo đơn hàng mới</Text>
            </Col>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menu_item}>
            <Col size={1} style={privateStyle.center}>
              <Icon
                name="ios-contact-outline"
                style={{ fontSize: 30, color: "#7CB342" }}
              />
            </Col>
            <Col size={5}>
              <Text style={styles.menu_text}>Cập nhật profile</Text>
            </Col>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menu_item}>
            <Col size={1} style={privateStyle.center}>
              <Icon
                name="ios-sync-outline"
                style={{ fontSize: 30, color: "#D500F9" }}
              />
            </Col>
            <Col size={5}>
              <Text style={styles.menu_text}>Thay đổi mật khẩu</Text>
            </Col>
          </TouchableOpacity>

          <View style={privateStyle.border} />
          <TouchableOpacity style={styles.menu_item}>
            <Col size={1} style={privateStyle.center}>
              <Icon
                name="md-power"
                style={{ fontSize: 30, color: "#FF5722" }}
              />
            </Col>
            <Col size={5}>
              <Text style={styles.menu_text}>Đăng xuất hệ thống</Text>
            </Col>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const privateStyle = {
  border: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
  },
  center: {
    alignItems: "center"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 20,
    flex: 3 / 10,
    backgroundColor: "#e50304"
  },
  header_id: {
    paddingTop: 5,
    paddingBottom: 5,
    color: "#fff",
    fontWeight: "bold",
    fontSize: responsiveFontSize(3)
  },
  menu: {
    flex: 7 / 10,
    padding: 5,
    backgroundColor: "#fff"
  },
  menu_item: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  menu_text: {
    paddingLeft: 5,
    color: "#616161",
    fontSize: responsiveFontSize(2.2)
  },
  menu_footer: {
    flex: 1 / 10,
    padding: 5,
    borderTopWidth: 0,
    borderTopColor: "#4A4948"
  },
  version: {
    color: "#73716D",
    fontSize: 12,
    marginBottom: 5
  },
  pointText: {
    color: "#E0E0E0",
    fontSize: responsiveFontSize(2),
    marginBottom: 5
  },
  copyright: {
    color: "#73716D",
    fontSize: 12
  }
});
