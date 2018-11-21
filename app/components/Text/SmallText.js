import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

// eslint-disable-next-line arrow-body-style
const SmallText = (props) => {
  const { content, onPress } = props;
  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <Text style={styles.smallText}>
        {content}
      </Text>
    </TouchableHighlight>
  );
}

SmallText.propTypes = {
  content: PropTypes.string,
  onPress: PropTypes.func,
};

export default SmallText;
