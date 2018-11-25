import React from 'react';
import { connect } from 'react-redux';
import { Button, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { connectAlert } from '../components/Alert';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

class SideMenu extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../components/Logo/images/circle-bg.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  buttonPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return <Button onPress={this.buttonPress} title="Go back home" />;
  }
}

export default connect()(connectAlert(SideMenu));
