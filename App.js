// Hooks - useState
import React, { useState } from 'react';

// Custom Fonts
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';

// Nested Stack Navigator & Bottom Tab Navigator
import MainStackNavigator from './src/navigation/AppNavigator';

const getFonts = () => Font.loadAsync({
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'playfairdisplay-regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        />
    );
  }

};
