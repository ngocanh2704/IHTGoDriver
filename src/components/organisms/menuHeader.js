import React from "react";
import styled from "styled-components";
import { Icon, TextTitle as Text } from "../atoms";
import { Header, Left, Right, Button, Body } from "native-base";

const StyledHeader = styled(Header)`
  background-color: ${props => props.theme.mainColor};
`;

const NewIcon = styled(Icon)`
  font-size: 50;
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
    <Right>
      {props.paging && (
        <>
          <Button transparent onPress={props.prev}>
            <NewIcon name="md-arrow-dropleft" />
          </Button>
          <Button transparent onPress={props.next}>
            <NewIcon name="md-arrow-dropright" />
          </Button>
        </>
      )}
    </Right>
  </StyledHeader>
);
