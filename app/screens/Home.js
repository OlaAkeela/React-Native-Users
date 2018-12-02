import React, { Component } from 'react';
import { View, Text } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#bee6b1',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {/* <StatusBar translucent={false} barStyle="light-content" /> */}
        <Text style={{ fontSize: 24 }}>Welcome</Text>
      </View>
    );
  }
}

export default Home;
