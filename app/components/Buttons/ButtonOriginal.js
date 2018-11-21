import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ButtonOriginal = (props) => {
  const { title, onPress } = props;
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor="#c79dd7"
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

ButtonOriginal.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default ButtonOriginal;
