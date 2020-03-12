// Hooks - useState
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';

export default function Plants({ navigation }) {

  const [plants, setPlants] = useState([

  ]);

  if (plants != '') {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Text style={styles.smallLink}>Sign Out</Text>
        <Text style={styles.header}>Your plants</Text>
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
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Text style={styles.smallLink}>Sign Out</Text>
        <Text style={styles.header}>Your plants</Text>
        <Text style={{marginTop: 16, fontSize: 16, textAlign: 'center'}}>
          <Text style={{fontFamily: 'poppins-regular'}}>It feels a bit empty in here. </Text>
          <Text onPress={() => navigation.navigate('Add Plant')} style={{fontFamily: 'poppins-semibold'}}>{'\n'}Add a plant </Text>
          <Text style={{fontFamily: 'poppins-regular'}}>to your home.</Text>
        </Text>
      </View>
    );
  }
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
