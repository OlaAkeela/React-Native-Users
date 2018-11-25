import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { PropTypes } from 'prop-types';
// import Icon from 'react-native-vector-icons';

import styles from './styles';

const TextInputWithIcon = (props) => {
  const { placeHolder, error } = props;
  return (
    <View>
      <View style={styles.container}>
        {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000" /> */}
        <TextInput
          {...props}
          style={styles.input}
          placeholder={placeHolder}
          underlineColorAndroid="transparent"
          placeholderTextColor="grey"
        />
      </View>
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
    </View>
  );
};

TextInputWithIcon.propTypes = {
  // onPress: PropTypes.func,
  placeHolder: PropTypes.string,
};

export default TextInputWithIcon;
