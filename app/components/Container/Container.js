import React from 'react';
import {
  View, Keyboard, TouchableWithoutFeedback, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <ImageBackground source={require('./Images/bg.jpg')} style={styles.bgImage}>
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.any,
};
export default Container;
