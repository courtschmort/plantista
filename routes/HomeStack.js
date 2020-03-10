import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Onboarding from '../screens/Onboarding';

const screens = {
  Onboarding: {
    screen: Onboarding,
  },
  Home: {
    screen: Home,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
