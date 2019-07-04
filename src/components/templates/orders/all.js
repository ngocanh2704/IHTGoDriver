import React from "react";
import { List, Content, Item } from "native-base";
import { OrderItem } from "../../organisms";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { ButtonPaging as Button } from "../../atoms";

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
        <Item
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            borderBottomWidth: 0
          }}
        >
          <Button prev />
          <Button next />
        </Item>
      </Container>
    );
  }
}
