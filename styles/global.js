import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'playfairdisplay-regular',
    fontSize: 64,
  },
  labelText: {
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
