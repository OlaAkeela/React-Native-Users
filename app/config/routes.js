import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgetPassword from '../screens/ForgetPassword';
import TermsAndPolicies from '../screens/TermsAndPolicies';
import CameraScreen from '../screens/Camera';
import Profile from '../screens/Profile';

const DrawerIcon = navigation => (
  <Icon
    name="md-menu"
    size={28}
    color="black"
    onPress={() => navigation.toggleDrawer()}
    style={{ paddingLeft: 20 }}
  />
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name="md-home" size={28} color="black" />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: () => <Icon name="ios-person" size={28} color="black" />,
        header: () => null,
      },
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarLabel: 'Camera',
        tabBarIcon: () => <Icon name="md-camera" size={28} color="black" />,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: '#b4cde6',
      order: [Profile, Home, CameraScreen],
    },
  },
);

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator,
    drawerLabel: 'Notifications',
  },
  TermsAndPolicies: {
    screen: TermsAndPolicies,
    navigationOptions: {
      drawer: {
        label: 'Home',
      },
    },
  },
});

const HomeStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: () => null,
      },
    },
    Home: {
      screen: DrawerNavigator,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <DrawerIcon {...navigation} />,
      }),
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
  },
  {
    headerMode: 'screen',
  },
);

const AppContainer = createAppContainer(HomeStack, TabNavigator);

export default AppContainer;
