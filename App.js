import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

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
      <Text style={styles.subHeader}>
        Welcome home,
      </Text>
      <Text style={styles.header}>
        Plantista
      </Text>
      <Text style={styles.body}>
        Your plants are waiting for you!
      </Text>
      <View style={styles.button}>
        <Button
          onPress={() => Alert.alert('You pressed the button!')}
          title='Get started'
          color='white'
          accessibilityLabel='Get started large button'
          />
      </View>
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
  header: {
    fontFamily: 'playfairdisplay-regular',
    fontSize: 64,
  },
  subHeader: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: '#c4c4c4',
  },
  body: {
    marginTop: 20,
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
  button: {
    flex: 0,
    justifyContent: 'flex-end',
    marginTop: 32,
    marginBottom: 32,
    width: 350,
    padding: 9,
    backgroundColor: 'black',
    textAlign: 'center',
  }
});
