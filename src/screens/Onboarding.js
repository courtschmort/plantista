import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Image
        style={styles.icon}
        source={require('../../assets/icons/seedling-solid-fern_green.png')}
        />
      <View style={styles.headerContainer}>
        <Text style={styles.subHeader}>
          Welcome home,
        </Text>
        <Text style={styles.header}>
          Plantista
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Plants')} style={styles.button}>
        <Text style={styles.buttonText}>
          Get started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'playfairdisplay-regular',
    fontSize: 64,
  },
  subHeader: {
    color: '#c4c4c4',
    fontFamily: 'poppins-regular',
    fontSize: 16,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
  },
  button: {
    height: 64,
    backgroundColor: '#cb4e24',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'poppins-regular',
    fontSize: 16,
    textAlign: 'center',
  },
  icon: {
    marginTop: 32,
    width: 32,
    height: 32,
    resizeMode: 'contain',
  }
});
