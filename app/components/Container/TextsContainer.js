import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TextContainer = ({ children }) => (
  <React.Fragment>
    <View style={styles.textContainerView}>{children}</View>
  </React.Fragment>
);

TextContainer.propTypes = {
  children: PropTypes.any,
};
export default TextContainer;
