import React, { Component } from 'react'
import { Icon } from 'native-base';
import ActionButton from 'react-native-action-button';
class FabQr extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <ActionButton buttonColor="#b71c1c" position='left'>
                <ActionButton.Item
                    title="Quét đơn giao"
                    onPress={()=>{
                        this.props.navigation.navigate('QrScreen',{index: 1})
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
        )
    }
}

export default FabQr