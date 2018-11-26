import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
class TermsAndPolicies extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#e7b382',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        {/* <StatusBar translucent={false} barStyle="light-content" /> */}
        <Text style={{ fontSize: 24 }}>Terms and Policies</Text>
      </View>
    );
  }
}

export default TermsAndPolicies;
