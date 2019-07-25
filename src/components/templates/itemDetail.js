import React, { Component } from "react";
import { Content, Body, Card, CardItem, Spinner } from "native-base";
import {
  TextNormal as Text,
  TextOrder,
  DarkIcon as Icon,
  TextHightlight
} from "../atoms";
import { withNavigation } from "react-navigation";
import axios from "../../utilities/axios";
import toast from "../../utilities/toast";
import { connect } from "react-redux";
import { SET_CURRENT_ORDER } from "../../actions/types";
import { toCurrency } from "../../utilities/regex";
import { formatDate } from "../../utilities/formatDate";

class ItemDetail extends Component {
  state = {
    isLoading: true,
    order: []
  };

  loadData = () => {
    const { id } = this.props;
    axios
      .get("driver/order-detail/" + id)
      .then(res => {
        this.props.dispatch({
          type: SET_CURRENT_ORDER,
          id,
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
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.loadData();
    }
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
      payment_type,
      sender_district_id,
      sender_province_id,
      receive_district_id,
      receive_province_id
    } = this.state.order;

    return this.state.isLoading ? (
      <Spinner color="red" />
    ) : (
      <Content style={{ padding: 5 }}>
        <Card>
          <CardItem bordered>
            <TextOrder>{name}</TextOrder>
          </CardItem>
          <CardItem>
            <Body>
              <TextHightlight text={code} />
              <TextHightlight
                prefix={"Phí vận chuyển: "}
                text={toCurrency(total_price ? total_price : 0) + " VNĐ"}
              />
              <TextHightlight
                prefix={"Thu hộ: "}
                text={toCurrency(take_money ? take_money : 0) + " VNĐ"}
              />
              <Text>Ngày tạo: {formatDate(created_at)}</Text>
              <Text>{this.props.orderType[car_option]}</Text>

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
              <Text>
                Địa chỉ:
                {sender_address +
                  " " +
                  sender_district_id +
                  " " +
                  sender_province_id}
              </Text>
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
              <Text>
                Địa chỉ:
                {receive_address +
                  " " +
                  receive_district_id +
                  " " +
                  receive_province_id}
              </Text>
              <Text>Điện thoại: {receive_phone} </Text>
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
