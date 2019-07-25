import styled from "styled-components";
import React from "react";
import { Text } from "native-base";

const StyledText = styled(Text)`
  color: ${props => props.theme.lightColor};
  font-size: 16;
  background-color: ${props => props.theme.mainColor};
  padding: 5px 10px;
  margin-bottom: 5px;
`;

export default props => (
  <StyledText>
    {props.prefix} {props.text}
  </StyledText>
);
