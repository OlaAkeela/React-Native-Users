import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { ProfileTopSection, SettingsContainer } from '../components/Container';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileTopSection />
        <SettingsContainer />
      </ScrollView>
    );
  }
}

export default Profile;
