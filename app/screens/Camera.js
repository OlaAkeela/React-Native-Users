import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
class Camera extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#f3aee4',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {/* <StatusBar translucent={false} barStyle="light-content" /> */}
        <Text style={{ fontSize: 24 }}>Camera</Text>
      </View>
    );
  }
}

export default Camera;
