import styled from "styled-components";
import { Icon } from "native-base";

const StyledIcon = styled(Icon)`
  color: ${props => props.theme.darkColor};
  font-size: 15;
  padding-right: 10px;
`;
export default StyledIcon;
