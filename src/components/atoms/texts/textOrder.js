import styled from "styled-components";
import { Text } from "native-base";

const StyledText = styled(Text)`
  color: ${props => props.theme.mainColor};
  font-size: 16;
  font-weight: bold;
  margin-left: 10px;
`;
export default StyledText;
