import React from "react";
import styled from "styled-components";
import { Icon, TextTitle as Text } from "../atoms";
import { Header, Left, Right, Button, Body } from "native-base";

const StyledHeader = styled(Header)`
  background-color: ${props => props.theme.mainColor};
`;

export default props => (
  <StyledHeader>
    <Left>
      <Button transparent onPress={props.back}>
        <Icon name="arrow-back" />
      </Button>
    </Left>
    <Body>
      <Text>{props.title}</Text>
    </Body>
    <Right />
  </StyledHeader>
);
