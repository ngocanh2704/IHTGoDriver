import React, { PureComponent } from "react";
import ActionButton from "react-native-action-button";
import { Icon } from "../atoms";
import { connect } from "react-redux";
import axios from "../../utilities/axios";
import { Spinner } from "native-base";
import {
  RESET_ALL_ORDERS,
  RESET_WAITING_ORDERS,
  RESET_FINISH_ORDERS
} from "../../actions/types";

class FabRefresh extends PureComponent {
  state = {
    isLoading: false
  };

  refresh = () => {
    this.setState(
      {
        isLoading: true
      },
      () => {
        let type = 0;
        let page = 0;
        let action = RESET_ALL_ORDERS;
        switch (this.props.type) {
          case 1:
            type = 0;
            action = RESET_ALL_ORDERS;
            break;
          case 2:
            type = 2;
            action = RESET_WAITING_ORDERS;
            break;
          case 3:
            type = 4;
            action = RESET_FINISH_ORDERS;
            break;
          default:
            type = 0;
            action = RESET_ALL_ORDERS;
        }
        axios
          .post("driver/list-order", {
            type,
            page
          })
          .then(res => {
            this.setState(
              {
                isLoading: false
              },
              () =>
                this.props.dispatch({
                  type: action,
                  orders: res.data
                })
            );
          })
          .catch(err => {});
      }
    );
  };

  render() {
    return (
      <ActionButton
        buttonColor="#b71c1c"
        icon={
          this.state.isLoading ? (
            <Spinner color="white" />
          ) : (
            <Icon name="md-refresh" />
          )
        }
        onPress={this.refresh}
      />
    );
  }
}

export default connect()(FabRefresh);
