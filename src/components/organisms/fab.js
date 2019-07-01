import React from "react";
import { Button, Fab, View } from "native-base";
import { Icon } from "../atoms";
import styled from "styled-components";

const StyledFab = styled(Fab)`
  background-color: ${props => props.theme.notifyColor};
`;

export default class ProFileForm extends React.PureComponent {
  state = {
    active: false
  };

  render() {
    return (
      <StyledFab
        active={this.state.active}
        direction="up"
        position="bottomRight"
        onPress={() => this.setState({ active: !this.state.active })}
      >
        <Icon type="AntDesign" name="appstore-o" />
        <Button style={{ backgroundColor: "#c62828" }}>
          <Icon name="logo-whatsapp" />
        </Button>
        <Button style={{ backgroundColor: "#c62828" }}>
          <Icon name="logo-facebook" />
        </Button>
      </StyledFab>
    );
  }
}
