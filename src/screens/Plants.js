// Hooks - useState
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';

export default function Plants({ navigation }) {

  const [plants, setPlants] = useState([
    {name: 'Snakey', location: 'Bedroom', date: 'March 13, 2020', type: 'Snake Plant', notes: 'Snake plants prefer bright, indirect light and can even tolerate some direct sunlight.', image: 'TBD'}
  ]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={{textAlign: 'center', fontFamily: 'playfairdisplay-regular', fontSize: 36, paddingBottom: 16}}>Your plants</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/mong-bui-NznxEfw9iVI-unsplash.jpg')}
        />
      <FlatList
        data={plants}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.name}>{ item.name }</Text>
            <Text style={styles.type}>{ item.type }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#fff',
  },
  image: {
    width: 350,
    height: 150,
    marginTop: 16,
    marginBottom: 16,
  },
  name: {
    fontFamily: 'playfairdisplay-regular',
    fontSize: 24,
  },
  type: {
    fontFamily: 'poppins-regular',
    fontSize: 12,
  }
});
