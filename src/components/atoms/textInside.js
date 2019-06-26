import styled from "styled-components";
import { Text } from "native-base";

const StyledText = styled(Text)`
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.lightColor};
  font-size: 16;
`;
export default StyledText;
