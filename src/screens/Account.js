import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';

export default function Account() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.smallLink}>Sign Out</Text>
      <Text style={styles.header}>Your account</Text>
      <View>
        <Text style={styles.subHeader}>Name</Text>
        <Text>First Last</Text>
        <Text style={styles.subHeader}>Email</Text>
        <Text>example@email.com</Text>
        <Text style={styles.subHeader}>Password</Text>
        <Text>*******</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Plants')} style={styles.button}>
        <Text style={styles.buttonText}>
          Get started
        </Text>
      </TouchableOpacity>
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
    paddingLeft: 32,
    paddingRight: 32,
    flex: 1,
  },
  smallLink: {
    marginTop: 12,
    fontFamily: 'poppins-semibold',
    fontSize: 12,
    textAlign: 'right',
  },
  header: {
    marginTop: 12,
    marginBottom: 16,
    fontFamily: 'playfairdisplay-regular',
    fontSize: 36,
    textAlign: 'center',
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
  }
});
