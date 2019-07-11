import React from "react";
import { List, Content, Spinner } from "native-base";
import { OrderItem } from "../organisms";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { ButtonFilled as Button } from "../atoms";
import axios from "../../utilities/axios";
import toast from "../../utilities/toast";
import { withNavigation } from "react-navigation";

const Container = styled(Content)`
  margin-left: 5px;
  margin-right: 5px;
`;

class OrderList extends React.PureComponent {
  state = {
    isLoading: true,
    isLoadMore: false,
    orders: [],
    page: 1
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    const type = this.props.type || 0;
    axios
      .post("driver/list-order", {
        type,
        page: this.state.page
      })
      .then(res => {
        this.setState({
          orders: this.state.orders.concat(res.data),
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
        page: this.state.page + 1,
        isLoadMore: true
      },
      () => this.loadData()
    );
  };

  renderOrderList = () => {
    return this.state.orders.map(item => {
      return (
        <TouchableOpacity
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
        ) : (
          <Button text="Xem thêm" onPress={this.loadMore} />
        )}
      </Container>
    );
  }
}

export default withNavigation(OrderList);
