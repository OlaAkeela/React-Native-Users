import React from 'react';
import { View, TextInput } from 'react-native';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons';

import styles from './styles';

const TextInputWithIcon = (props) => {
  const { placeHolder, type } = props;

  return (
    <View style={styles.container}>
      {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000" /> */}
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        secureTextEntry={type === 'password'}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

TextInputWithIcon.propTypes = {
  // onPress: PropTypes.func,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
};

export default TextInputWithIcon;
