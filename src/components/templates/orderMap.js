import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class OrderMap extends PureComponent {
  render() {
    return (
      <View
        style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text>Update count: {this.props.count}</Text>
        <Text>Latitude: {this.props.lat}</Text>
        <Text>Longitude: {this.props.lng}</Text>
      </View>
    );
  }
}

export default connect(state => ({
  lat: state.location.lat,
  lng: state.location.lng,
  count: state.location.updateCounter
}))(OrderMap);
