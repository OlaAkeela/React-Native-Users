import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';

// eslint-disable-next-line react/prefer-stateless-function
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Text> Profile</Text>
      </Container>
    );
  }
}

export default Profile;
