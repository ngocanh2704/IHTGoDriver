import React, { Component } from "react";
import { List, Container, Content } from "native-base";
import ItemComponent from "../atoms/ItemComponent";

export default class AllOrderComponent extends Component {
  handle = () => {
    this.props.handleDetail();
  };
  render() {
    return (
      <Content>
        <List>
          <ItemComponent handle={this.handle} />
          <ItemComponent handle={this.handle} />
          <ItemComponent handle={this.handle} />
          <ItemComponent handle={this.handle} />
          <ItemComponent handle={this.handle} />
          <ItemComponent handle={this.handle} />
          <ItemComponent handle={this.handle} />
          <ItemComponent handle={this.handle} />
          <ItemComponent handle={this.handle} />
          <ItemComponent handle={this.handle} />
        </List>
      </Content>
    );
  }
}
