import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

class TermsAndPolicies extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  backToHome = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="light-content" />
        <Text>Terms and Policies</Text>
      </View>
    );
  }
}

export default TermsAndPolicies;
