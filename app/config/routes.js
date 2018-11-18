import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
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
