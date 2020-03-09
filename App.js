import React, { useState } from 'react';
import OnboardingTutorialScreen from './screens/OnboardingTutorialScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'playfairdisplay-regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <OnboardingTutorialScreen />
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
