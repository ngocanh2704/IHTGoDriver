import React, { PureComponent } from "react";
import { Content, Body, Card, CardItem, Spinner } from "native-base";
import { TextNormal as Text, TextOrder, DarkIcon as Icon } from "../atoms";
import { withNavigation } from "react-navigation";
import axios from "../../utilities/axios";
import toast from "../../utilities/toast";
import { connect } from "react-redux";
import { SET_CURRENT_ORDER } from "../../actions/types";
import { toCurrency } from "../../utilities/regex";

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
        this.props.dispatch({
          type: SET_CURRENT_ORDER,
          id: res.data.id,
          sender_number: res.data.sender_phone,
          receive_number: res.data.receive_phone,
          current_status: res.data.status
        });

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
    const {
      code,
      name,
      created_at,
      sender_name,
      car_option,
      total_price,
      status,
      note,
      sender_phone,
      sender_address,
      receive_name,
      receive_phone,
      receive_address,
      payer,
      weight,
      is_speed,
      take_money,
      admin_note,
      payment_type
    } = this.state.order;

    return this.state.isLoading ? (
      <Spinner color="red" />
    ) : (
      <Content style={{ padding: 5 }}>
        <Card>
          <CardItem bordered>
            <Icon name="ios-information-circle" />
            <TextOrder>Thông tin đơn hàng</TextOrder>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Mã đơn hàng: {code}</Text>
              <Text>Tên đơn hàng: {name}</Text>
              <Text>Ngày tạo: {created_at}</Text>
              <Text>Loại đơn hàng: {this.props.orderType[car_option]}</Text>
              {payment_type === 1 && (
                <Text>Phí vận chuyển: {toCurrency(total_price)} VND</Text>
              )}
              {take_money !== 0 ||
                (take_money !== "0" && (
                  <Text>Thu hộ: {toCurrency(take_money)} VND</Text>
                ))}
              <Text>Trạng thái: {this.props.orderStatus[status]}</Text>
              <Text>Cân nặng: {weight} kg</Text>
              <Text>Giao hỏa tốc: {is_speed === 0 ? "KHÔNG" : "CÓ"}</Text>
              <Text>Ghi chú: {note}</Text>
              <Text>Ghi chú thêm: {admin_note}</Text>
              {payment_type === 1 && (
                <Text>
                  Người trả tiền phí:
                  {payer === 1 ? " Người gửi trả" : " Người nhận trả"}
                </Text>
              )}
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem bordered>
            <Icon name="ios-contact" />
            <TextOrder>Thông tin người gửi</TextOrder>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Họ tên: {sender_name}</Text>
              <Text>Địa chỉ: {sender_address}</Text>
              <Text>Điện thoại: {sender_phone}</Text>
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
              <Text>Họ tên: {receive_name}</Text>
              <Text>Địa chỉ: {receive_phone}</Text>
              <Text>Điện thoại: {receive_address}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default connect(state => ({
  orderType: state.constant.orderType,
  orderStatus: state.constant.orderStatus
}))(withNavigation(ItemDetail));
