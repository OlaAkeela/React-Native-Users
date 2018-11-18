import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';


const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>{children}</View>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.any,
};
export default Container;
