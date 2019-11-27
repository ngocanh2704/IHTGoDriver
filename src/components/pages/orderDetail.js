import React, { PureComponent } from "react";
import { StyleSheet, View, Text, Button, Dimensions, Platform  } from "react-native";
import { Container, Spinner, Input } from "native-base";
import { ItemDetail } from "../templates";
import { MenuHeader as Header, Fab } from "../organisms";
import SwipeGesture from "../../utilities/swipeHandler";
import { connect } from "react-redux";


class DetailComponent extends PureComponent {
  state = {
    id: null,
    isLoading: true,
    isModalVisible: false,
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

  backToPrev = () => {
    const nextOrder = this.nextOrder(this.state.id);
    if (nextOrder) {
      this.setState({
        id: nextOrder.id
      });
    }
  };

  jumpToNext = () => {
    const prevOrder = this.prevOrder(this.state.id);
    if (prevOrder) {
      this.setState({
        id: prevOrder.id
      });
    }
  };

  onSwipePerformed = action => {
    switch (action) {
      case "left": {
        this.backToPrev();
        break;
      }
      case "right": {
        this.jumpToNext();
        break;
      }
      default: {
        // console.log("Undeteceted action");
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
          paging
          prev={this.backToPrev}
          next={this.jumpToNext}
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
              {this.props.block === false && <Fab />}
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
  id: state.constant.id,
  block: state.location.block
}))(DetailComponent);
