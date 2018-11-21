import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Keyboard,
  Animated,
  Platform,
} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

// eslint-disable-next-line react/prefer-stateless-function
class Logo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize),
    };
  }

  componentDidMount() {
    const verb = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardWillShowListener = Keyboard.addListener(
      `keyboard${verb}Show`,
      this.keyboardWillShow,
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      `keyboard${verb}Hide`,
      this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  keyboardWillShow = () => {
    const { containerImageWidth, imageWidth } = this.state;
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardWillHide = () => {
    const { containerImageWidth, imageWidth } = this.state;
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$largemageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const { containerImageWidth, imageWidth } = this.state;

    const containerImageStyles = [
      styles.containerImage,
      { width: containerImageWidth, height: containerImageWidth },
    ];
    const imageStyles = [styles.logo, { width: imageWidth }];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            source={require('./images/circle-bg.png')}
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            resizeMode="contain"
          />
          <Animated.Image
            source={require('./images/react.png')}
            style={imageStyles}
            resizeMode="contain"
          />
        </Animated.View>
        <Text style={styles.text}>React Native</Text>
      </View>
    );
  }
}

export default Logo2;
