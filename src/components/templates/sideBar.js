import React, { PureComponent } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { Row, Col } from "native-base";
import { DarkIcon, Icon, TextMenu as Text } from "../atoms";

const responsiveFontSize = f => {
  return Math.sqrt(height * height + width * width) * (f / 100);
};
const { height, width } = Dimensions.get("window");

export default class DrawerComponent extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header_logo}>
          <Image
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              height: 60,
              width: 90
            }}
            source={require("../../../assest/logo.png")}
          />
        </View>
        <View style={styles.header}>
          <Row size={3}>
            <Col style={privateStyle.center}>
              <Text style={styles.header_id}>name</Text>
              <Text style={styles.pointText}>Phone</Text>
              <Text style={styles.pointText}>Email</Text>
              <TouchableOpacity
                style={styles.menu_item}
                onPress={() => this.props.navigator.navigate("ProfileScreen")}
              >
                <Icon type="MaterialCommunityIcons" name="account-edit" />
              </TouchableOpacity>
            </Col>
          </Row>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menu_item}
            onPress={() => this.props.navigator.navigate("AppInfoScreen")}
          >
            <Col size={1} style={privateStyle.center}>
              <DarkIcon type="AntDesign" name="copyright" />
            </Col>
            <Col size={5}>
              <Text>Thông tin ứng dụng</Text>
            </Col>
          </TouchableOpacity>

          <View style={privateStyle.border} />
          <TouchableOpacity
            style={styles.menu_item}
            onPress={() => this.props.navigator.navigate("LoginScreen")}
          >
            <Col size={1} style={privateStyle.center}>
              <DarkIcon type="AntDesign" name="poweroff" />
            </Col>
            <Col size={5}>
              <Text>Đăng xuất hệ thống</Text>
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
    backgroundColor: "#b71c1c"
  },
  header_logo: {
    padding: 20,
    backgroundColor: "#fff"
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
    padding: 10,
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
  pointText: {
    color: "#E0E0E0",
    fontSize: responsiveFontSize(2),
    marginBottom: 5
  }
});
