import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainStackNavigator from './src/navigation/MainStackNavigator';

const getFonts = () => Font.loadAsync({
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'playfairdisplay-regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <MainStackNavigator />
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
