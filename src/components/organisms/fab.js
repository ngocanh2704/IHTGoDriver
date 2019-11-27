import React, { PureComponent } from "react";
import ActionButton from "react-native-action-button";
import { Icon } from "../atoms";
import { Linking, Dimensions, Button } from "react-native";
import { connect } from "react-redux";
import axios from "../../utilities/axios";
import { startShipping, finishShipping } from "../../actions/shipping";
import ImagePicker from 'react-native-image-crop-picker';
import { StyleSheet, View, Text, Platform } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";




class Fab extends PureComponent {
  constructor() {
    super();
    this.state = {
      image: null,
      images: null,
    };
  }

  pickSingleWithCamera = async (cropping, mediaType = 'photo') => {
    var token = await AsyncStorage.getItem("@token")
    ImagePicker.openCamera({
      cropping: cropping,
      includeExif: true,
      mediaType,
      includeBase64: true,
      compressImageQuality: Platform.OS === 'android' ? 0.5 : 0.3
    }).then(image => {
      this.setState({
        image: `data:${image.mime};base64,` + image.data,
        images: null
      });
      var formData = new FormData();
      var file = this.state.image
      formData.append('id', this.props.id)
      formData.append('image', file)
      formData.append('token', token)
      Axios({
        url: "https://ihtgo.com.vn/api/driver/upload-image-base64",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token
        }
      }).then(res => {
        this.cleanupImages()
       this._finishShipping()
      })
        .catch(err => console.log(err))
    }).catch(e => console.log(e));
  }

  cleanupImages() {
    ImagePicker.clean().then(() => {
      console.log('removed tmp images from tmp directory');
    }).catch(e => {
      console.log(e);
    });
  }

  _startShipping = () => {
    const { id } = this.props;
    axios
      .get("driver/order-start/" + id)
      .then(res => this.props.dispatch(startShipping(id)))
      .catch(err => { });
  };

  _finishShipping = () => {
    axios
      .get("driver/order-finish/" + this.props.id)
      .then(res => this.props.dispatch(finishShipping(this.props.id)))
      .catch(err => { });
  };

  render() {
    const { current_status, sender_number, receive_number } = this.props;

    return (
        <ActionButton buttonColor="#b71c1c">
          <ActionButton.Item
            title="Gọi cho người gửi"
            onPress={() => Linking.openURL(`tel:${sender_number}`)}
          >
            <Icon name="md-call" />
          </ActionButton.Item>
          <ActionButton.Item
            title="Gọi cho người nhận"
            onPress={() => Linking.openURL(`tel:${receive_number}`)}
          >
            <Icon name="md-call" />
          </ActionButton.Item>
          {current_status == 2 && (
            <ActionButton.Item
              title="Bắt đầu giao hàng"
              onPress={this._startShipping}
            >
              <Icon name="md-bicycle" />
            </ActionButton.Item>
          )}
          {current_status == 3 && (
            <ActionButton.Item
              title="Hoàn thành đơn hàng"
              onPress={() => {
                // this._finishShipping(),
                this.pickSingleWithCamera(false)
              }}
            >
              <Icon name="md-bicycle" />
            </ActionButton.Item>
          )}
        </ActionButton>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default connect(state => ({
  id: state.constant.id,
  sender_number: state.constant.sender_number,
  receive_number: state.constant.receive_number,
  current_status: state.constant.current_status
}))(Fab);
