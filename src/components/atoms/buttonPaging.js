import styled from "styled-components";
import { Button } from "native-base";
import React from "react";
import { Icon } from ".";

const ButtonFilled = styled(Button)`
  margin: 5px;
  border: none;
  background-color: ${props => props.theme.mainColor};
`;

export default props => (
  <ButtonFilled>
    <Icon
      name={
        props.next
          ? "ios-arrow-forward"
          : props.prev
          ? "ios-arrow-back"
          : "ios-close"
      }
    />
  </ButtonFilled>
);
