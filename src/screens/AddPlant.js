import * as React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default function AddPlant() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.smallLink}>Sign Out</Text>
      <Text style={styles.header}>Add a plant</Text>
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
  }
});
