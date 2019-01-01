import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  static propTypes = {
    userName: PropTypes.string,
  };

  render() {
    const { userName } = this.props;
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
        <Text style={{ fontSize: 24 }}>
Welcome
          {' '}
          {userName}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.login.userName,
});

export default connect(mapStateToProps)(Home);
