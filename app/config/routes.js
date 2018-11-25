import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgetPassword from '../screens/ForgetPassword';
import TermsAndPolicies from '../screens/TermsAndPolicies';
import SideMenu from '../screens/SideMenu'

const HomeStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: () => null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerTitle: 'Sign Up',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#b2b2b2',
        },
      },
    },
    ForgetPassword: {
      screen: ForgetPassword,
      navigationOptions: {
        headerTitle: 'Send New Password',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#b2b2b2',
        },
      },
    },
    TermsAndPolicies: {
      screen: TermsAndPolicies,
      navigationOptions: {
        headerTitle: 'Terms and Policies',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#b2b2b2',
        },
      },
    },
    SideMenu: {
      screen: SideMenu,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    headerMode: 'screen',
  },
);
const AppContainer = createAppContainer(HomeStack);

export default AppContainer;
