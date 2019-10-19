import React, { PureComponent } from "react";
import ActionButton from "react-native-action-button";
import { Icon } from "../atoms";
import { Linking } from "react-native";
import { connect } from "react-redux";
import axios from "../../utilities/axios";
import { startShipping, finishShipping } from "../../actions/shipping";
import ImagePicker from 'react-native-image-crop-picker';
import { StyleSheet, View, Text } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";

class Fab extends PureComponent {
  constructor() {
    super();
    this.state = {
      image: null,
      images: null
    };
  }

  pickSingleWithCamera = async (cropping, mediaType = 'photo') => {
    var token =  await AsyncStorage.getItem("@token")
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
      includeBase64: true
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: { uri: image.path, width: image.width, height: image.height, mime: image.mime },
        images: null
      });
      var formData = new FormData();
      var file = { uri: image.path, width: image.width, height: image.height, mime: image.mime }
      
      formData.append('id', this.props.id)
      formData.append('image', file)
      formData.append('token', token)
      Axios({
        url: "https://ihtgo.com.vn/api/driver/upload-image",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token
        }
      }).then(res=>console.log(res))
      .catch(err=>console.log(err))
    }).catch(e => alert(e));
  }

  uploadFile = async () => {
    var formData = new FormData();
    formData.append('id', this.props.id)
    formData.append('image', this.state.image)
    axios.post('driver/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => console.log(res)).catch(err => console.log(err))
  }

  cleanupSingleImage() {
    let image = this.state.image || (this.state.images && this.state.images.length ? this.state.images[0] : null);
    console.log('will cleanup image', image);

    ImagePicker.cleanSingle(image ? image.uri : null).then(() => {
      console.log(`removed tmp image ${image.uri} from tmp directory`);
    }).catch(e => {
      alert(e);
    })
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
