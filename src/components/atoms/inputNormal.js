import styled from "styled-components";
import { Input } from "native-base";

const InputNormal = styled(Input)`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  color: ${props => props.theme.darkColor};
  font-size: 14;
`;
export default InputNormal;
