import React, { PureComponent } from "react";
import { Content, Body, Card, CardItem, Spinner } from "native-base";
import { TextNormal as Text, TextOrder, DarkIcon as Icon } from "../atoms";
import { withNavigation } from "react-navigation";
import axios from "../../utilities/axios";
import toast from "../../utilities/toast";

class ItemDetail extends PureComponent {
  state = {
    isLoading: true,
    order: []
  };

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", 0);
    axios
      .get("driver/order-detail/" + id)
      .then(res => {
        console.log(res.data);
        this.setState({
          order: res.data,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false
        });
        toast("Lỗi không lấy được dữ liệu đơn hàng");
      });
  }

  render() {
    return this.state.isLoading ? (
      <Spinner color="red" />
    ) : (
      <>
        <Content style={{ padding: 5 }}>
          <Card>
            <CardItem bordered>
              <Icon name="ios-information-circle" />
              <TextOrder>Thông tin đơn hàng</TextOrder>
            </CardItem>
            <CardItem>
              <Body>
                <Text>8784</Text>
                <Text>IHT20190621020</Text>
                <Text>Ngày tạo: 21/06/2019</Text>
                <Text>Phương tiện vận chuyển:</Text>
                <Text>Loại: </Text>
                <Text>Tổng tiền: 00000 VND</Text>
                <Text>Trạng thái: </Text>
                <Text>Ghi chú: </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Icon name="ios-contact" />
              <TextOrder>người gửi</TextOrder>
            </CardItem>
            <CardItem>
              <Body>
                <Text>dddđ</Text>
                <Text>Địa chỉ: </Text>
                <Text>Phone: </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Icon name="ios-contact" />
              <TextOrder>Thông tin người nhận</TextOrder>
            </CardItem>
            <CardItem>
              <Body>
                <Text />
                <Text>Địa chỉ: </Text>
                <Text>Phone:</Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Icon name="ios-navigate" />
              <TextOrder>Điểm giao hàng thêm</TextOrder>
            </CardItem>
          </Card>
        </Content>
      </>
    );
  }
}

export default withNavigation(ItemDetail);
