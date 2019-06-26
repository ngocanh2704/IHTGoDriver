import styled from "styled-components";
import { Text } from "native-base";

const StyledText = styled(Text)`
  color: ${props => props.theme.darkColor};
  font-size: 14;
`;
export default StyledText;
