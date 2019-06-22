import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DrawerComponent extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#ffff', flex: 1, width: '70%'}}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
