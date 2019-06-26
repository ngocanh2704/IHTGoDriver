import styled from "styled-components";
import { Text } from "native-base";

const Quote = styled(Text)`
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.notifyColor};
  font-size: 12;
`;
export default Quote;
