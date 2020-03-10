import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../assets/icons/seedling-solid.png')}
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
    padding: 32,
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingBottom: 24,
    fontFamily: 'playfairdisplay-regular',
    fontSize: 64,
    lineHeight: 96,
  },
  subHeader: {
    color: '#c4c4c4',
    fontFamily: 'poppins-regular',
    fontSize: 16,
    letterSpacing: 1.6,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#000',
    flex: 0,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
  },
  buttonText: {
    padding: 20,
    color: '#fff',
    fontFamily: 'poppins-regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  icon: {
    marginBottom: 32,
    width: 32,
    height: 32,
    resizeMode: 'contain',
  }
});
