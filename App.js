import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

import * as Font from 'expo-font';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'playfair-display-regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/icons/seedling-solid.png')}
          />
        <View style={styles.content}>
          <Text style={styles.subHeader}>
            Welcome home,
          </Text>
          <Text style={styles.header}>
            Plantista
          </Text>
          <Text style={styles.body}>
            Your plants are waiting for you!
          </Text>
        </View>
        <TouchableOpacity onPress={() => Alert.alert('You pressed the button!')}>
          <Text style={styles.button}>Get started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'playfair-display-regular',
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
    padding: 14,
    backgroundColor: 'black',
    fontFamily: 'poppins-medium',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    flex: 0,
    justifyContent: 'flex-end',
    marginTop: 64,
    width: 44,
    height: 44,
    resizeMode: 'contain',
  }
});

// { this.state.fontLoaded ? () : null }
