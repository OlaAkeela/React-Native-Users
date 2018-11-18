
import React, { Component } from 'react';
import { Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Text> Body here </Text>
      </Container>
    );
  }
}

export default connect()(connectAlert(Home));
