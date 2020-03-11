import * as React from 'react';

// Vector Icons
import { FontAwesome } from '@expo/vector-icons';

// React Navigation - Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

// React Navigation - Bottom Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Onboarding from '../screens/Onboarding';
import Plants from '../screens/Plants';
import AddPlant from '../screens/AddPlant';
import Account from '../screens/Account';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Onboarding'
      headerMode='screen'
    >
      <Stack.Screen
        name='Onboarding'
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Plants'
        component={MainBottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

function MainBottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000'
      }}
    >
      <Tab.Screen
        name='Plants'
        component={Plants}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='home' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Add Plant'
        component={AddPlant}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='plus-circle' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};
