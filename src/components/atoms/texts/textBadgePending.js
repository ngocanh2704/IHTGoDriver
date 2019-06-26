import styled from "styled-components";
import React from "react";
import { Badge, Text } from "native-base";

const StyledText = styled(Text)`
  color: ${props => props.theme.lightColor};
  font-size: 12;
`;

const StyledBadge = styled(Badge)`
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.darkColor};
`;
export default () => (
  <StyledBadge>
    <StyledText>Chưa giao</StyledText>
  </StyledBadge>
);
