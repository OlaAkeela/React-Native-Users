import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { connectAlert } from '../components/Alert';
import validate from '../config/validate';
import { Container, TextContainer } from '../components/Container';
import { Logo } from '../components/Logo';
import { TextInputWithIcon } from '../components/TextInput';
import { ButtonOriginal } from '../components/Buttons';
import { SmallText } from '../components/Text';
import { login, loginAsGuest } from '../actions/login';

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      usernameError: '',
      password: '',
      passwordError: '',
    };
  }

  loginPress = () => {
    const { username, password } = this.state;
    const usernameError = validate(username, ['notEmpty']);
    const passwordError = validate(password, ['notEmpty']);

    this.setState({
      usernameError,
      passwordError,
    });
    const { dispatch } = this.props;
    dispatch(login(username));
    if (!(usernameError && passwordError)) {
      if (username === 'Ola' && password === '123') {
        const { navigation } = this.props;
        navigation.navigate('Home');
      }
    }
  };

  createAccountPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Signup');
  };

  forgetPasswordPress = () => {
    const { navigation } = this.props;
    navigation.navigate('ForgetPassword');
  };

  loginAsGuestPress = () => {
    const { dispatch } = this.props;
    dispatch(loginAsGuest());
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  usernameChange = (value) => {
    this.setState({ username: value.trim() });
  };

  passwordChange = (value) => {
    this.setState({ password: value.trim() });
  };

  render() {
    const {
      username, usernameError, password, passwordError,
    } = this.state;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
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
          placeHolder="Password"
          secureTextEntry
          onChangeText={this.passwordChange}
          onBlur={() => {
            this.setState({
              passwordError: validate(password, ['notEmpty']),
            });
          }}
          error={passwordError}
        />
        <ButtonOriginal title="LOGIN" onPress={this.loginPress} />
        <TextContainer>
          <SmallText content="Create Account" onPress={this.createAccountPress} />
          {/* <SmallText content="Forgot Password" onPress={this.forgetPasswordPress} /> */}
          <SmallText content="Login As Guest" onPress={this.loginAsGuestPress} />
        </TextContainer>
      </Container>
    );
  }
}

export default connect()(connectAlert(Login));
