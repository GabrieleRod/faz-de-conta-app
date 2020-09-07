import { StyleSheet, Dimensions } from 'react-native';

const ALTURA = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  containerBackgroundImage: {
    flex: 1,
    height: ALTURA,
    backgroundColor: '#e6ffff',
  },
  scrollview: {
    padding: 18, 
    paddingTop: 0,
  },
  imagemLogo: {
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 55,
  },
  containerLogin: {
    width: '100%',
    padding: 12,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FFF',
    opacity: 0.8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFF',
  },
  textInput: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#262626',
  },
  input: {
    fontSize: 16,
    width: '100%',
    height: 40,
    borderWidth: 1.5,
    borderColor: '#737373',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFF',
    color: '#1A1A1A',
    alignSelf: 'center',
    marginBottom: 15,
  },
  containerBotao: {
    width: '100%',
    height: 45,
    marginTop: 18,
    marginBottom: 14,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd23f',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ffd23f',
  },
  textBotao: {
    fontSize: 17,
    color: '#333',
  },
  textEC: {
    marginBottom: 5,
    alignSelf: 'center',
    color: '#262626',
    fontSize: 16,
  },
});

export default styles;