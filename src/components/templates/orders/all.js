import React from "react";
import { List, Content } from "native-base";
import { OrderItem } from "../../organisms";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const Container = styled(Content)`
  margin-left: 5px;
  margin-right: 5px;
`;

export default class OrderList extends React.PureComponent {
  render() {
    return (
      <Container>
        <List>
          <TouchableOpacity
            onPress={() => {
              this.props.navigate(1);
            }}
          >
            <OrderItem />
          </TouchableOpacity>
        </List>
      </Container>
    );
  }
}
