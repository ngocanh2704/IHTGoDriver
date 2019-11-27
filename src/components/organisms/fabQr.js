import React, { Component } from 'react'
import { Icon } from 'native-base';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modalbox' 
import { Input } from "native-base";
import {Dimensions, Platform, Text, Button} from 'react-native'
var screen = Dimensions.get('window')
class FabQr extends Component {
    constructor(props) {
        super(props)
        this.state={
            note: ''
        }
    }

    showModal = () => {
        this.refs.myModal.open();
      }
    
      closeModal = () =>{
        this.refs.myModal.close();
      }

    
    render() {
        return (
            <>
            <ActionButton buttonColor="#b71c1c" position='left'>
                <ActionButton.Item
                    title="Quét đơn giao"
                    onPress={()=>{
                        // this.props.navigation.navigate('QrScreen',{index: 1})
                        this.showModal()
                    }}
                >
                    <Icon name="ios-qr-scanner"  type='Ionicons'/>
                </ActionButton.Item>
                <ActionButton.Item
                    title="Quét đơn lấy"
                    onPress={()=>{
                        this.props.navigation.navigate('QrScreen',{index: 0})
                    }}
                >
                    <Icon name="qrcode" type='AntDesign'/>
                </ActionButton.Item>
            </ActionButton>
            <Modal
          ref={"myModal"}
          style={{
            justifyContent: 'center',
            borderRadius: Platform.OS === 'ios' ? 30 : 0,
            shadowRadius: 10,
            width: screen.width - 80,
            height: 200
          }}
          position='center'
          backdrop={true}
          onClosed={() => {
            console.log('close')
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>Ghi chú</Text>
          <Input placeholder='Nhập ghi chú' style={{
            height: 40,
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10
          }}
            onChangeText={text => {
              this.setState({
                note: text
              })
            }}
          />
          <Button color='red' title="Xác nhân" onPress={()=>{
         this.props.navigation.navigate('QrScreen',{index: 1,note: this.state.note}),
         this.closeModal()
          }} />
        </Modal>
            </>
        )
    }
}

export default FabQr