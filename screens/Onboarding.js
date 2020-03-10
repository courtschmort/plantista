import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

export default function Onboarding({ navigation }) {
  const handlePress = () => {
    // navigation.navigate('Home');
    navigation.push('Home');
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../assets/icons/seedling-solid.png')}
        />
      <View style={styles.headerContainer}>
        <Text style={styles.subHeader}>
          Welcome home,
        </Text>
        <Text style={styles.header}>
          Plantista
        </Text>
      </View>
      <Text style={styles.text}>
        Your plants are waiting for you!
      </Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>
          Get started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
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
  text: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
  button: {
    flex: 0,
    justifyContent: 'flex-end',
    marginTop: 32,
    marginBottom: 32,
    backgroundColor: 'black',
    width: 350,
  },
  buttonText: {
    padding: 20,
    fontFamily: 'poppins-medium',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  icon: {
    flex: 0,
    justifyContent: 'flex-end',
    marginTop: 32,
    width: 44,
    height: 44,
    resizeMode: 'contain',
  }
});
