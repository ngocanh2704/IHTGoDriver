import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { QRScannerView } from 'react-native-qrcode-scanner-view'
import axios from '../../utilities/axios';

export default class QrScan extends Component {
    constructor(props) {
        super(props)
    }


    
    barcodeReceived = (event) => { /*console.log('Type: ' + event.type + '\nData: ' + event.data)*/
        axios.post('driver/qrcode-receive', {code: event.data}).then(res => {
            console.log(res)
            alert(res.data)
            this.props.navigation.goBack()
        }).catch(err => console.log(err))
    };
    
    barcodeSender = (event) =>{
   var note = this.props.navigation.getParam('note')
   console.log(note)
        axios.post('driver/qrcode-sender',{code: event.data, driver_note: note}).then(res=>{
            console.log(res)
            alert(res.data)
            this.props.navigation.goBack()
        }).catch(err=>console.log(err))
    }

    render() {
        const { navigation } = this.props;
        const index = navigation.getParam('index')
        return (
            <View style={{ flex: 1 }}>
                < QRScannerView
                    onScanResult={index == 0 ? this.barcodeReceived : this.barcodeSender}
                    hintText='Vui lòng quét mã QR'
                    scanBarAnimateReverse={true} />
            </View>
        )
    }
}