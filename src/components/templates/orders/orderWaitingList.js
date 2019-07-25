import React from "react";
import { List, Content, Spinner } from "native-base";
import { OrderItem } from "../../organisms";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { ButtonFilled as Button, TextNormal as Text } from "../../atoms";
import axios from "../../../utilities/axios";
import toast from "../../../utilities/toast";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { SET_WAITING_ORDERS } from "../../../actions/types";

const Container = styled(Content)`
  margin-left: 5px;
  margin-right: 5px;
`;

class OrderWaitingList extends React.PureComponent {
  state = {
    isLoading: true,
    isLoadMore: false
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    axios
      .post("driver/list-order", {
        type: 2,
        page: this.props.orders.length
      })
      .then(res => {
        this.props.dispatch({
          type: SET_WAITING_ORDERS,
          orders: res.data
        });

        this.setState({
          isLoading: false,
          isLoadMore: false
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          isLoadMore: false
        });
        toast("Lỗi không lấy được dữ liệu đơn hàng");
      });
  };

  loadMore = () => {
    this.setState(
      {
        isLoadMore: true
      },
      () => this.loadData()
    );
  };

  renderOrderList = () => {
    return this.props.orders.map(item => {
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            this.props.navigation.navigate("OrderDetailScreen", {
              id: item.id
            });
          }}
        >
          <OrderItem item={item} />
        </TouchableOpacity>
      );
    });
  };

  render() {
    return this.state.isLoading ? (
      <Spinner color="red" />
    ) : (
      <Container>
        <List>{this.renderOrderList()}</List>
        {this.state.isLoadMore ? (
          <Spinner color="red" />
        ) : this.props.orders.length > 0 ? (
          <Button text="Xem thêm" onPress={this.loadMore} />
        ) : (
          <Text>Không có đơn hàng</Text>
        )}
      </Container>
    );
  }
}

export default connect(state => ({
  orders: state.order.waitingOrders
}))(withNavigation(OrderWaitingList));
