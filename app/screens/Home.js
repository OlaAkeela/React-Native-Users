import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { SmallText } from '../components/Text';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../components/Logo/images/circle-bg.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  buttonPress = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  render() {
    return (
      <Container>
        <SmallText content="Welcome" />
        <Button onPress={this.buttonPress} title="Go to notifications" />
      </Container>
    );
  }
}

export default connect()(connectAlert(Home));
