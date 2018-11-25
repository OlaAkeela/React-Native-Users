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

class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      usernameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError: '',
    };
  }

  signUpPress = () => {
    const {
      username, email, password, confirmPassword,
    } = this.state;
    const usernameError = validate(username, ['notEmpty']);
    const emailError = validate(email, ['notEmpty']);
    const passwordError = validate(password, ['notEmpty']);
    const confirmPasswordError = validate(confirmPassword, ['notEmpty']);

    this.setState({
      usernameError,
      emailError,
      passwordError,
      confirmPasswordError,
    });
    if (!(usernameError && passwordError && emailError && confirmPasswordError)) {
      const { navigation } = this.props;
      navigation.navigate('Home');
    }
  };

  signInPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  termsAndPoliciesPress = () => {
    const { navigation } = this.props;
    navigation.navigate('TermsAndPolicies');
  };

  usernameChange = (value) => {
    this.setState({ username: value.trim() });
  };

  emailChange = (value) => {
    this.setState({ email: value.trim() });
  };

  PasswordChange = (value) => {
    this.setState({ password: value.trim() });
  };

  confirmPasswordChange = (value) => {
    this.setState({ confirmPassword: value.trim() });
  };

  render() {
    const {
      username,
      usernameError,
      email,
      emailError,
      password,
      passwordError,
      confirmPassword,
      confirmPasswordError,
    } = this.state;
    return (
      <Container containerStyle={{ marginTop: 50 }}>
        {/* <StatusBar translucent={false} barStyle="light-content" /> */}
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <TextInputWithIcon
          placeHolder="UserName"
          onChangeText={this.usernameChange}
          onBlur={() => {
            this.setState({
              usernameError: validate(username, ['notEmpty']),
            });
          }}
          error={usernameError}
        />
        <TextInputWithIcon
          placeHolder="Email"
          onChangeText={this.emailChange}
          onBlur={() => {
            this.setState({
              emailError: validate(email, ['notEmpty', 'email']),
            });
          }}
          error={emailError}
        />
        <TextInputWithIcon
          placeHolder="Password"
          type="password"
          onChangeText={this.PasswordChange}
          onBlur={() => {
            this.setState({
              passwordError: validate(password, ['notEmpty']),
            });
          }}
          error={passwordError}
        />
        <TextInputWithIcon
          placeHolder="Confirm Password"
          type="password"
          onChangeText={this.confirmPasswordChange}
          onBlur={() => {
            this.setState({
              confirmPasswordError: validate(confirmPassword, ['notEmpty']),
            });
          }}
          error={confirmPasswordError}
        />
        <ButtonOriginal title="Sign Up" onPress={this.signUpPress} />
        <TextContainer>
          <SmallText content="Have an account? Sign in" onPress={this.signInPress} />
        </TextContainer>
      </Container>
    );
  }
}

export default connect()(connectAlert(Signup));
