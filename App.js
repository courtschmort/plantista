import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'playfairdisplay-regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'poppins-medium' }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ fontFamily: 'poppins-regular' }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ fontFamily: 'poppins-semibold' }}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={{ fontFamily: 'playfairdisplay-regular' }}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
