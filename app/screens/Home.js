import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { connectAlert } from '../components/Alert';
import { Container, TextContainer } from '../components/Container';
import { Logo } from '../components/Logo';
import { TextInputWithIcon } from '../components/TextInput';
import { ButtonOriginal } from '../components/Buttons';
import { SmallText } from '../components/Text';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  loginPress = () => {
    console.log('login button press');
  };

  createAccountPress = () => {
    console.log('create account press');
  };

  forgetPasswordPress = () => {
    console.log('forget password press');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <TextInputWithIcon placeHolder="UserName" />
        <TextInputWithIcon placeHolder="Password" type="password" />
        <ButtonOriginal title="LOGIN" onPress={this.loginPress} />
        <TextContainer>
          <SmallText content="Create Account" onPress={this.createAccountPress} />
          <SmallText content="Forget Password" onPress={this.forgetPasswordPress} />
        </TextContainer>
      </Container>
    );
  }
}

export default connect()(connectAlert(Home));
