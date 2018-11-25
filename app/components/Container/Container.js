import React from 'react';
import {
  View, Keyboard, TouchableWithoutFeedback, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ children, containerStyle = null }) => {
  const containerStyles = [styles.container];
  if (containerStyle) {
    containerStyles.push(containerStyle);
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={require('./Images/bg.jpg')} style={styles.bgImage}>
        <View style={containerStyles}>{children}</View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  containerStyle: PropTypes.any,
};
export default Container;
