import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import validate from '../config/validate';
import { connectAlert } from '../components/Alert';
import { Container, TextContainer } from '../components/Container';
import { TextInputWithIcon } from '../components/TextInput';
import { ButtonOriginal } from '../components/Buttons';
import { SmallText } from '../components/Text';

class ForgetPassword extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
    };
  }

  sendPasswordPress = () => {
    const { email } = this.state;
    const emailError = validate(email, ['notEmpty', 'email']);
    this.setState({ emailError });
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  changeEmail = (value) => {
    this.setState({
      email: value.trim(),
    });
  };

  signUpPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Signup');
  };

  signInPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    const { email, emailError } = this.state;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <TextInputWithIcon
          placeHolder="Email"
          onChangeText={this.changeEmail}
          onBlur={() => {
            this.setState({
              emailError: validate(email, ['notEmpty', 'email']),
            });
          }}
          error={emailError}
        />
        <ButtonOriginal title="Send Me New Password" onPress={this.sendPasswordPress} />
        <TextContainer>
          <SmallText content="Sign up" onPress={this.signUpPress} />
          <SmallText content="Sign in" onPress={this.signInPress} />
        </TextContainer>
      </Container>
    );
  }
}

export default connect()(connectAlert(ForgetPassword));
