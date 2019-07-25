import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { Container, Spinner } from "native-base";
import { ItemDetail } from "../templates";
import { MenuHeader as Header, Fab } from "../organisms";
import SwipeGesture from "../../utilities/swipeHandler";
import { connect } from "react-redux";

class DetailComponent extends PureComponent {
  state = {
    id: null,
    isLoading: true
  };
  componentDidMount() {
    this.setState(
      {
        id: this.props.navigation.getParam("id", 0)
      },
      () =>
        this.setState({
          isLoading: false
        })
    );
  }

  nextOrder = id => {
    const n = this.props.orders.length;
    for (let i = 0; i < n; i++) {
      if (this.props.orders[i].id === id) {
        if (i == n - 1) {
        } else {
          return this.props.orders[i + 1];
        }
      }
    }
  };

  prevOrder = id => {
    const n = this.props.orders.length;
    for (let i = 0; i < n; i++) {
      if (this.props.orders[i].id === id) {
        if (i == 0) {
        } else {
          return this.props.orders[i - 1];
        }
      }
    }
  };

  onSwipePerformed = action => {
    switch (action) {
      case "left": {
        const nextOrder = this.nextOrder(this.state.id);
        if (nextOrder) {
          this.setState({
            id: nextOrder.id
          });
        }
        break;
      }
      case "right": {
        const prevOrder = this.prevOrder(this.state.id);
        if (prevOrder) {
          this.setState({
            id: prevOrder.id
          });
        }
        break;
      }
      default: {
        console.log("Undeteceted action");
        break;
      }
    }
  };

  render() {
    return (
      <Container>
        <Header
          back={() => this.props.navigation.goBack()}
          title="Thông tin đơn hàng"
        />
        {this.state.isLoading ? (
          <Spinner color="red" />
        ) : (
          <>
            <SwipeGesture
              gestureStyle={styles.swipesGestureContainer}
              onSwipePerformed={this.onSwipePerformed}
            >
              <ItemDetail id={this.state.id} />
            </SwipeGesture>
            <Fab />
          </>
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  swipesGestureContainer: {
    height: "100%",
    width: "100%"
  }
});

export default connect(state => ({
  orders: state.order.allOrders,
  id: state.constant.id
}))(DetailComponent);
