import * as React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function Onboarding({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Image
        style={globalStyles.icon}
        source={require('../../assets/icons/seedling-solid-fern_green.png')}
        />
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.labelText}>
          Welcome home,
        </Text>
        <Text style={globalStyles.title}>
          Plantista
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Plants')} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>
          Get started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

});
